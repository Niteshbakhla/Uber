const { validationResult } = require("express-validator");
const captainModel = require("../Models/captain.model");
const { createCaptain } = require("../services/captian.service");
const blacklistModel = require("../Models/blacklist.model");

exports.registerCaptain = async (req, res) => {

            try {
                        const errors = validationResult(req);
                        if (!errors.isEmpty()) {
                                    return res.status(400).json({ errors: errors.array() });
                        }

                        const { fullname, email, password, vehicle } = req.body;


                        const isCaptainAlreadyExist = await captainModel.findOne({ email });
                        if (isCaptainAlreadyExist) {
                                    return res.status(400).json({ message: 'Captain already exist' });
                        }

                        const hashedPassword = await captainModel.hashPassword(password);

                        const captain = await createCaptain({
                                    firstname: fullname.firstname,
                                    lastname: fullname.lastname,
                                    email,
                                    password: hashedPassword,
                                    color: vehicle.color,
                                    plate: vehicle.plate,
                                    capacity: vehicle.capacity,
                                    vehicleType: vehicle.vehicleType
                        });

                        const token = captain.generateAuthToken();

                        return res.status(201).json({ token, captain, message: "captian account created" });
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}


exports.loginCaptain = async (req, res, next) => {
            try {
                        const errors = validationResult(req);
                        if (!errors.isEmpty()) {
                                    return res.status(400).json({ errors: errors.array() });
                        }

                        const { email, password } = req.body;

                        const captain = await captainModel.findOne({ email }).select('+password');

                        if (!captain) {
                                    return res.status(401).json({ message: 'Invalid email or password' });
                        }

                        const isMatch = await captain.comparePassword(password);

                        if (!isMatch) {
                                    return res.status(401).json({ message: 'Invalid email or password' });
                        }

                        const token = captain.generateAuthToken();

                        res.cookie('token', token);

                        return res.status(200).json({ token, captain, message: "Login successfully" });
            } catch (error) {
                        return res.status(500).json({ message: error.message });
            }
}


exports.getCaptainProfile = async (req, res, next) => {
            return res.status(200).json({ captain: req.captain });
}



exports.logoutCaptain = async (req, res, next) => {
            try {
                        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

                        await blacklistModel.create({ token });

                        res.clearCookie('token');

                        return res.status(200).json({ message: 'Logout successfully' });
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}