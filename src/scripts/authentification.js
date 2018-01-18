import * as firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyAr-6UZeRjobk1o8RWF-M375dDjrH33E3o',
    authDomain: 'campus-brett.firebaseapp.com',
    databaseURL: 'https://campus-brett.firebaseio.com',
    projectId: 'campus-brett',
    storageBucket: 'campus-brett.appspot.com',
    messagingSenderId: '719539293613'
};
firebase.initializeApp(config);

//Login Elements
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');

//Register Elements
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerButton = document.getElementById('register-button');

//Login Function
loginButton.addEventListener('click', e => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

registerButton.addEventListener('click', e => {
    const email = registerEmail.value;
    const password = registerPassword;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStatusChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('Not logged in!');
    }
});
