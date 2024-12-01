const express = require("express")
const router = express.Router();
const { body } = require("express-validator");
const { registerUser, loginUser, getUserProfile } = require("../controllers/user.controller");
const { authUser } = require("../middleware/auth.middleware");



router.post("/register", [
            body("email").isEmail().withMessage("Invalid Email"),
            body("fullName.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
            body("password").isLength({ min: 6 }).withMessage("Passoword must be at least 6 characters long.")
],
            registerUser
);

router.post("/login", [
            body("email").isEmail().withMessage("Invalid email"),
            body("password").isLength({ min: 6 }).withMessage("Password length should more then 6 character")
], loginUser)


router.get("/profile", authUser, getUserProfile)


module.exports = router;