// Firebase 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNnq_E9RvVTZ-hXezmhbKqLz0TeynSCLI",
  authDomain: "difains.github.io",
  projectId: "coin-airdrop-manager",
  storageBucket: "coin-airdrop-manager.firebasestorage.app",
  messagingSenderId: "1010675296219",
  appId: "1:1010675296219:web:b7ae36a98ee5a8474669fe",
  measurementId: "G-T109L8Y2Z7"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
