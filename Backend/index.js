const dotenv = require("dotenv")
dotenv.config();


const http = require("http")
const app = require("./server")
const PORT = process.env.PORT || 5000
const cors = require("cors");
const { connectDB } = require("./database/db");
const router = require("./routes/user.routes");

connectDB();
app.use(cors());

app.use("/user", router);

app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
})