const { validationResult } = require("express-validator");
const userModel = require("../Models/user.model");
const { createUser } = require("../services/user.service");
const blacklistModel = require("../Models/blacklist.model");



exports.registerUser = async (req, res, next) => {

            try {
                        const errors = validationResult(req)
                        if (!errors.isEmpty()) {
                                    return res.status(400).json({ errors: errors.array() })
                        }

                        const { fullName: { firstname, lastname }, email, password } = req.body;

                        const isUserAlready = await userModel.findOne({ email });
                        if (isUserAlready) {
                                    return res.status(400).json({ message: "User already exist" });
                        }

                        const hashedPassword = await userModel.hashPassword(password);

                        const user = await createUser({
                                    firstname,
                                    lastname,
                                    email,
                                    password: hashedPassword
                        });


                        const token = user.generateAuthToken()

                        return res.status(201).json({ token, user, message: "user register successfully✅" })
            } catch (error) {
                        if (error.code === 11000) {
                                    return res.status(404).json({ success: false, message: "email already exist" })
                        }
                        return res.status(500).json({ success: false, message: error.message })
            }
}

exports.loginUser = async (req, res, next) => {
            try {
                        const error = validationResult(req)
                        if (!error.isEmpty()) {
                                    return res.status(400).json({ errors: error.array() });
                        }

                        const { email, password } = req.body;

                        const user = await userModel.findOne({ email }).select("+password");
                        if (!user) {
                                    return res.status(401).json({ success: false, message: "Invalid email or password" })
                        }

                        const isMatch = await user.comparePassword(password)
                        if (!isMatch) {
                                    return res.status(401).json({ success: false, message: "Invalid email or password" })
                        }

                        const token = user.generateAuthToken();

                        return res.status(201).json({ success: true, token, message: "Successfully Login" })
            } catch (error) {
                        return res.status(500).json({ success: true, message: "Internal server error" })
            }

}

exports.getUserProfile = async (req, res) => {
            try {

                        return res.status(201).json({ success: true, message: "you got the user", user: req.user })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}

exports.logout = async (req, res) => {
            try {
                        // Clear the token cookie
                        res.clearCookie("token");

                        // Get the token from cookies or authorization header
                        const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

                        // Check if token is valid
                        if (!token) {
                                    return res.status(400).json({ success: false, message: "Token is required" });
                        }

                        // Log the token to ensure it's being retrieved properly
                        console.log("Token retrieved: ", token);

                        // Before inserting, check if the token already exists in the blacklist (optional)
                        const existingToken = await blacklistModel.findOne({ token });

                        if (existingToken) {
                                    return res.status(400).json({ success: false, message: "Token is already blacklisted" });
                        }

                        // Insert the token into the blacklist model
                        await blacklistModel.create({ token });
                        // Send response
                        return res.status(200).json({ message: "Logged out successfully" });
            } catch (error) {
                        console.error("Error during logout:", error);
                        return res.status(500).json({ success: false, message: error.message });
            }
};
