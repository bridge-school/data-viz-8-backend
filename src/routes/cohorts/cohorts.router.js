const express = require('express');

const { getCohortsTypeController } = require("./cohorts.controller");

const router = express.Router();

router.get("", getCohortsTypeController);

module.exports = {
  cohortsRouter: router
}