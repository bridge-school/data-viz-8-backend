const admin = require("firebase-admin");
const MockFirebase = require('mock-cloud-firestore');

const mockData = require('./mockData')

let db;

// initialize firebase store
const authenticateFireStore = () => {
  try {
    const serviceAccount = require("../../firebase-credentials.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (e) {
    throw new Error(
      "Please add the firebase-credentials.json file to your root folder found in your project's Slack channel"
    );
  }
}

// NOTE: NODE_ENV is set to 'testing' in .circleci/config 
// Cannot query Firestore db from circleci since Firebase credentials are not committed to repo
// If in 'testing' environment, use MockFirebase with mock data returned
if(process.env.NODE_ENV !== 'testing') {
  authenticateFireStore();
  db = admin.firestore();
}else{
  window.firebase = new MockFirebase(mockData);
  db = firebase.firestore();
}

// import the db from any file to access firebase!
module.exports = db;
