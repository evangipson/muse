// Set up our firebase database
var firebaseConfig = (function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAEuXyxhrU47gtid-Hnudfq69_WS4OusMU",
        authDomain: "muse-97077.firebaseapp.com",
        databaseURL: "https://muse-97077.firebaseio.com",
        storageBucket: "muse-97077.appspot.com",
        messagingSenderId: "431439498675"
    };
    firebase.initializeApp(config);
})(); // IIFE for closure