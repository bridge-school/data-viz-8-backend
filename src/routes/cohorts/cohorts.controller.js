const db = require('../../db');

const cohortsRef = db.collection("cohorts");

const wealthController = (req, res) => {
    return res.json({
        ok: "Make it rainnnnn"
    });
};

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

const getCohortDetailsController = (req, res) => {
    // capturing url params
    // const cohortType = req.query.cohortType;
    return res.json({
        body: "yo yo yo"
    });

    // cohortsRef
    // .where('cohortType', '==', cohortType)
    // .get()
    // .then(snapshot => {
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('getCohortsDetailsController')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉')
    //     return res.json({
    //         data: snapshot.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 ...doc.data()
    //             };
    //         })
    //     });
    // })
    // .catch(error => {
    //     console.log("ERROR " + error)
    //     res.json({ error });
    // });
  };
  
  module.exports = {
    getCohortsTypeController,
    getCohortDetailsController,
  }
  