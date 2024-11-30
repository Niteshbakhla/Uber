const mongoose = require("mongoose")


exports.connectDB = async () => {
            const connect = await mongoose.connect(process.env.database)

            if (connect.ConnectionStates.connected) {
                        console.log("Database is connected")
            } else {
                        console.log(" Database Failed to connect ")
            }
}