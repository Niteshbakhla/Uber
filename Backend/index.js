const dotenv = require("dotenv")
dotenv.config();


const http = require("http")
const app = require("./server")
const PORT = process.env.PORT || 5000
const cors = require("cors")

app.use(cors());

app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
})