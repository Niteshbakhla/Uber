const userModel = require("../Models/user.model")


exports.createUser = async ({ firstname, lastname, email, password }) => {

            if (!firstname || !email || !password) {
                        throw new Error("All fields are required");
            }

            const user = new userModel({
                        fullName: {
                                    firstname,
                                    lastname
                        },
                        email,
                        password
            });
            await user.save();

            return user;
}