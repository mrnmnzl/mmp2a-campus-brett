import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAr-6UZeRjobk1o8RWF-M375dDjrH33E3o',
    authDomain: 'campus-brett.firebaseapp.com',
    databaseURL: 'https://campus-brett.firebaseio.com',
    projectId: 'campus-brett',
    storageBucket: 'campus-brett.appspot.com',
    messagingSenderId: '719539293613'
};

class Authentication {
    constructor() {
        firebase.initializeApp(config);
    }

    login(email, password) {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));

        return promise;
    }

    register(email, password) {
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    }

    logout() {
        firebase.auth().signOut();
    }
}

export default new Authentication();