const express = require('express');

const { 
  getCohortsTypeController, 
  getCohortDetailsController 
} = require("./cohorts.controller");

const router = express.Router();

router.get("", getCohortsTypeController);

router.get("/cohort-details", getCohortDetailsController);

module.exports = {
  cohortRouter: router
}