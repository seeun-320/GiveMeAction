import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiLZqjIzhjmMw7vm8vs_9-Dq1M4miZGnQ",
    authDomain: "alarmapp-fc5ea.firebaseapp.com",
    databaseURL: "https://alarmapp-fc5ea-default-rtdb.firebaseio.com",
    projectId: "alarmapp-fc5ea",
    storageBucket: "alarmapp-fc5ea.appspot.com",
    messagingSenderId: "651134671087",
    appId: "1:651134671087:web:6ce9f0fbd74df6975d631a"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };