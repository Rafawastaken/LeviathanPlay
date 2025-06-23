// app.config.js
import "dotenv/config";

export default ({ config }) => ({
  ...config,
  name: "LeviathanPlay",
  slug: "leviathanplay",
  version: "1.1.0",
  version_name: "Cerberus",
  android: {
    ...config.android,
    package: "com.rafawastaken.leviathanplay",
  },
  ios: {
    ...config.ios,
    bundleIdentifier: "com.rafawastaken.leviathanplay",
  },
  splash: {
    image: "./assets/splash.png", // Path to your splash image
    backgroundColor: "#ffffff", // Set to your desired background color
    resizeMode: "contain", // or 'cover' based on your design
  },
  extra: {
    FIREBASE_API_KEY: "AIzaSyCLty0bjmSMjCPiArXnTqYf3_QDOYjP3wk",
    FIREBASE_AUTH_DOMAIN: "rafaf-44ef5.firebaseapp.com",
    FIREBASE_PROJECT_ID: "rafaf-44ef5",
    FIREBASE_STORAGE_BUCKET: "rafaf-44ef5.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "318980572017",
    FIREBASE_APP_ID: "1:318980572017:web:560c34a52528f945482cd0",
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    eas: {
      projectId: "1d776ac2-dfae-4dae-a597-4bd61783ace1",
    },
  },
});
