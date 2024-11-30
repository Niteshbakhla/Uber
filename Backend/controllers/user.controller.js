const { validationResult } = require("express-validator");
const userModel = require("../Models/user.model");
const { createUser } = require("../services/service");


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