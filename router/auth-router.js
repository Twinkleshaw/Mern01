const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
router.route("/").get(authController.home);
const validate = require("../middleware/validate-middleware.js");

router.route("/register").post(validate(signupSchema), authController.register);
router.route("/login").post(authController.login);

module.exports = router;
