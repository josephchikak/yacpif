// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1HB4g29JrrPXYrahHmkJUT8XrpYVK4Pk',
  authDomain: 'yacpif-184fa.firebaseapp.com',
  databaseURL: 'https://yacpif-184fa-default-rtdb.firebaseio.com',
  projectId: 'yacpif-184fa',
  storageBucket: 'yacpif-184fa.appspot.com',
  messagingSenderId: '604388690956',
  appId: '1:604388690956:web:cd06224b6beb9e3962f229',
  measurementId: 'G-1G2DC80ZSE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

