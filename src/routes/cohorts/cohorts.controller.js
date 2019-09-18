const db = require('../../db');

const cohortsRef = db.collection("cohorts");

// capture cohorts by type (i.e. front end, design)
const getCohortsTypeController = (req, res) => {
    // capturing url params
    const cohortType = req.query.cohortType;
    const cohortNumber = req.query.cohortNumber;

    console.log(cohortNumber);

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
    getCohortsTypeController
}
