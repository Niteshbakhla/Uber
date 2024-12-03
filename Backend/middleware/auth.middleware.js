const userModel = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



exports.authUser = async (req, res, next) => {
            const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
            if (!token) {
                        return res.status(401).json({ message: "Unauthorized" });
            }

            const isBlacklist = await userModel.findOne({ token: token });
            if (!isBlacklist) {
                        return res.status(401).json({ message: "Unauthorized" });
            }
            try {

                        const decoded = jwt.verify(token, process.env.JWT_SECRET);

                        const user = await userModel.findById(decoded._id);
                        req.user = user;
                        return next();
            } catch (error) {

                        return res.status(401).json({ message: error.message });
            }
}