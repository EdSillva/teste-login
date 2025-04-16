// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseOptions } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config'

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  // There is not problem having this api key here
  // the documentation says "Firebase-related APIs use API keys
  // only to identify the Firebase project or app, not for
  // authorization to call the API (like some other APIs allow)."
  // Reference: https://firebase.google.com/docs/projects/api-keys
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAnalytics = getAnalytics(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
export const remoteConfig = getRemoteConfig(firebaseApp)
remoteConfig.settings.minimumFetchIntervalMillis = 30

export async function initializeRemoteConfig() {
  try {
    const fetched = await fetchAndActivate(remoteConfig)

    if (!fetched) {
      console.warn('No Remote Config values retrieved')
      return
    }

    console.log('Remote Config values retrieved and activated', fetched)
  } catch (error) {
    console.error('Error fetching and activating Remote Config:', error)
  }
}
