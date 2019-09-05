const request = require("supertest");
const { cohortsRouter } = require("./cohorts.router");

describe("GET/ cohorts by type", () => {
  it("responds with json", () => {

    request(cohortsRouter)
      .get('/cohorts?type=front end')
      .expect('Content-Type', /json/)

  });
});