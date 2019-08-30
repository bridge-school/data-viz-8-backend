const db = require('../../db');


const cohortsRef = db.collection("cohorts");

const getCohortsController = (req, res) => {
    const cohortType = req.query.cohortType

    cohortsRef
    .where('cohortType', '==', cohortType)
    .get()
    .then(snapshot => {

        res.json({
            data: snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    numApplicants: doc.data().applicants.length,
                    ...doc.data()
                };
            })
        });
    })

    .catch(error => {
        res.json({ error });
    });

  };
  

  module.exports = {
    getCohortsController
  }
  