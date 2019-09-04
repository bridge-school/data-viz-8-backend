const request = require("supertest");
const express = require('express');
const { cohortsRouter } = require("./cohorts.router");


// TODO: return to this to add more test cases
describe("GET/ cohorts by type", () => {

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

  const agent = request.agent(app);

  it("responds with json", () => {
    agent
      .get('/cohorts?type=filter')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});