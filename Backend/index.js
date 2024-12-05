const dotenv = require("dotenv")
dotenv.config();


const http = require("http")
const app = require("./server")
const PORT = process.env.PORT || 5000
const cors = require("cors");
const { connectDB } = require("./database/db");
const userroutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes")
const cookieparser = require("cookie-parser")



connectDB();
app.use(cors());
app.use(cookieparser())
app.use("/user", userroutes);
app.use("/captain", captainRoutes)





app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
})