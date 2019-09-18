const db = require('../../db');

const cohortsRef = db.collection("cohorts");

// capture cohorts by type (i.e. front end, design)
const getCohortsTypeController = (req, res) => {
    // capturing url params
    const cohortType = req.query.cohortType;

    cohortsRef
    .where('cohortType', '==', cohortType)
    .get()
    .then(snapshot => {
        res.json({
            data: snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            })
        });
    })

    .catch(error => {
        console.log("ERROR " + error)
        res.json({ error });
    });
};

const getIndividualCohortController = (req, res) => {
    const cohortType = req.query.cohortType;
    const cohort = req.query.cohort;
    
    cohortsRef
    .where('cohortType', '==', cohortType)
    .get()
    .then(snapshot => {
        res.json({
            data: snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            })
        });
    })

    .catch(error => {
        console.log("ERROR " + error)
        res.json({ error });
    });
  };
  
  module.exports = {
    getCohortsTypeController,
    getIndividualCohortController,
  }