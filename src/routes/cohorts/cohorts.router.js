const express = require('express');

const { 
  getCohortsTypeController,
  getCohortController,
 } = require("./cohorts.controller");

const router = express.Router();

router.get("", getCohortsTypeController);
router.get("/cohort", getCohortController);

module.exports = {
  cohortsRouter: router
}