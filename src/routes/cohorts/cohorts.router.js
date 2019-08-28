const express = require('express');

const { getCohortsController } = require("./cohorts.controller");

const router = express.Router();

router.get("", getCohortsController);

module.exports = {
  cohortsRouter: router
}