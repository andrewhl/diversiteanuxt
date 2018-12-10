import Firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBil-h_Pbmn5KU0u-9-jCZqmSN2VqTHWFM',
  authDomain: 'diversitea-162723.firebaseapp.com',
  databaseURL: 'https://diversitea-162723.firebaseio.com',
  projectId: 'diversitea-162723',
  storageBucket: 'diversitea-162723.appspot.com',
  messagingSenderId: '789895598608'
}

export const firebaseApp = Firebase.initializeApp(config)
export const auth = firebaseApp.auth()
