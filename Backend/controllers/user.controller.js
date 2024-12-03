const { validationResult } = require("express-validator");
const userModel = require("../Models/user.model");
const { createUser } = require("../services/service");
const blacklistModel = require("../Models/blacklist.model");



exports.registerUser = async (req, res, next) => {

            try {
                        const errors = validationResult(req)
                        if (!errors.isEmpty()) {
                                    return res.status(400).json({ errors: errors.array() })
                        }

                        const { fullName: { firstname, lastname }, email, password } = req.body;

                        const hashedPassword = await userModel.hashPassword(password);

                        const user = await createUser({
                                    firstname,
                                    lastname,
                                    email,
                                    password: hashedPassword
                        });


                        const token = user.generateAuthToken()

                        res.status(201).json({ token, user })
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
                        res.clearCookie("token");

                        const token = req.cookies.token || req.headers.authorization.split(" ")[1];

                        await blacklistModel.create({ token })

                        return res.status(200).json({ message: "Logged out" })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}