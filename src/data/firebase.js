import { initializeApp } from 'firebase/app';

const config = {
	apiKey: "",
	authDomain: "junostarter.firebaseapp.com",
	databaseURL: "https://junostarter-default-rtdb.firebaseio.com",
	projectId: "junostarter",
	storageBucket: "junostarter.appspot.com",
	messagingSenderId: "485617419005",
	appId: "1:485617419005:web:ddd629b0487d14c735f494"
};

const firebaseApp = initializeApp(config);

export default firebaseApp;