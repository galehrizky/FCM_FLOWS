importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAg0fDDpUCPvO7fRJMTiUl5FKmfg8RCnAg",
    projectId: "flows-c17fb",
    messagingSenderId: "851562170903",
    appId: "1:851562170903:web:57cbe1b175274c209fea52"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'Assets/flowslogo.png' 
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
