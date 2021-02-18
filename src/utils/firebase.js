import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID,
	REACT_APP_MEASUREMENT_ID,
} = process.env

const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_AUTH_DOMAIN,
	projectId: REACT_APP_PROJECT_ID,
	storageBucket: REACT_APP_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
	appId: REACT_APP_APP_ID,
	measurementId: REACT_APP_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

const db = firebase.firestore()
const functions = firebase.app().functions('asia-northeast2')

if (window.location.hostname === 'localhost') {
	firebase.auth().useEmulator('http://localhost:9099/')
	firebase.functions().useEmulator('localhost', 5001)
	db.useEmulator('localhost', 8080)
}

export { db, functions }
export default firebase
