// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD_b7Ne5GEHYV0t1gJILqrxt9qPJWaM7tA",
    authDomain: "tiendasurabs.firebaseapp.com",
    projectId: "tiendasurabs",
    storageBucket: "tiendasurabs.appspot.com",
    messagingSenderId: "49618724472",
    appId: "1:49618724472:web:5fe9d7bad8fda6d4882f8d",
    measurementId: "G-Y1HJM26TKE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);