const request = require("supertest");
const express = require('express');
const { cohortsRouter } = require("./cohorts.router");

const app = express();

app.get('/cohorts?type=filter', (req, res) =>{
  res.status(200).json(
    {"cohorts": {
      "cohort1": {
        "type": "filter"
      },
      "cohort2": {
        "type": "filter"
      },
      "cohort3": {
        "type": "filter out"
      }
    }
  })
})

// TODO: return to this to add more test cases
describe("GET/ cohorts by type", () => {
  it("responds with json", () => {
    request(app)
      .get('/cohorts?type=filter')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});