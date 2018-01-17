import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// var config = {
//     apiKey: "AIzaSyAr-6UZeRjobk1o8RWF-M375dDjrH33E3o",
//     authDomain: "campus-brett.firebaseapp.com",
//     databaseURL: "https://campus-brett.firebaseio.com",
//     projectId: "campus-brett",
//     storageBucket: "",
//     messagingSenderId: "719539293613"
// };
    
// firebase.initializeApp(config);