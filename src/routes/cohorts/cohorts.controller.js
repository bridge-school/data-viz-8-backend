const db = require('../../db')

const getCohortsController = (req, res) => {

    db.collection("cohorts")
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
        // console.log("TESTING RES!");
        // console.log(res);
    })
    .catch(error => {
        res.json({ error });
    });

  };
  
  module.exports = {
    getCohortsController
  }
  