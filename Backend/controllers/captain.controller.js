const { validationResult } = require("express-validator");
const captainModel = require("../Models/captain.model");
const { createCaptain } = require("../services/captian.service");

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

                        return res.status(201).json({ token, captain });
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}