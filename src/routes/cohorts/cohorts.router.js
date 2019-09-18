const express = require('express');

const { 
  getCohortsTypeController,
  getIndividualCohortController,
} = require("./cohorts.controller");

const router = express.Router();

router.get("", getCohortsTypeController);

router.get("/cohortdetails", getIndividualCohortController);

module.exports = {
  cohortsRouter: router
}

// const express = require('express');

// const { getCohortsTqypeController } = require("./cohorts.controller");

// const router = express.Router();

// router.get("", getCohortsTypeController);

// module.exports = {
//   cohortsRouter: router
// }