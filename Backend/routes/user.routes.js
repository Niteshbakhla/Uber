const express = require("express")
const router = express.Router();
const { body } = require("express-validator");
const { registerUser } = require("../controllers/user.controller");



router.post("/register", [
            body("email").isEmail().withMessage("Invalid Email"),
            body("fullName.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
            body("password").isLength({ min: 6 }).withMessage("Passoword must be at least 6 characters long.")
],
            registerUser
);



module.exports = router;