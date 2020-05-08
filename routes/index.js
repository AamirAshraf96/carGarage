const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//Welcome
router.get("/", (req, res) => res.render("welcome"));
//Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
    email: req.user.email,
    carMake: req.user.carMake
  })
);

module.exports = router;
