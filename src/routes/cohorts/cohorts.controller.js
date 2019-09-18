const db = require('../../db');

const cohortsRef = db.collection("cohorts");

// capture cohorts by type (i.e. front end, design)
const getCohortsTypeController = (req, res) => {
    // http://localhost:8081/cohorts/cohort?cohortType=front%20end

    // capturing url params
    const cohortType = req.query.cohortType;

    cohortsRef
    .where('cohortType', '==', cohortType)
    .get()
    .then(snapshot => {
        res.json({
            data: snapshot.docs
                .filter(doc => {
                    console.log(doc.id);
                    // return (`cohort-${cohortNumber}` === doc.id);
                    return doc
                })
                .map(doc => {
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
  
  // capture cohorts by number, within a type (i.e. cohort 8 of the front end cohorts)
  const getCohortController = (req, res) => {
    // http://localhost:8081/cohorts/cohort?cohortType=front%20end&cohortNumber=cohortNumberGoesHere

    const cohortType = req.query.cohortType;
    const cohortNumber = req.query.cohortNumber;

    cohortsRef
        .where('cohortType', '==', cohortType)
        .get()
        .then(snapshot => {
            res.json({
                data: snapshot.docs
                    .filter(doc => {
                        console.log(doc.id);
                        return (`cohort-${cohortNumber}` === doc.id);
                    })
                    .map(doc => {
                        console.log("anything");
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
    getCohortController,
  }
  