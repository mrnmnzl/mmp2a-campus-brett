importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const config = {
    apiKey: 'AIzaSyAr-6UZeRjobk1o8RWF-M375dDjrH33E3o',
    authDomain: 'campus-brett.firebaseapp.com',
    databaseURL: 'https://campus-brett.firebaseio.com',
    projectId: 'campus-brett',
    storageBucket: 'campus-brett.appspot.com',
    messagingSenderId: '719539293613' 
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
  });

  
// messaging.setBackgroundMessageHandler(function(payload){
//     const title = "Hello"
//     const options = {
//         body: payload.data.status
//     }
//     return self.regstration.showNotification(title, options);
// })