import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './firebaseConfig'  // Add your config here

const firebaseConfig = {
  //your config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let unsubscribe;

function AuthCheck() {
  useEffect(() => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/auth/web/user-properties
        const uid = user.uid;
        console.log(uid);
      } else {
        // User is signed out
        console.log('User signed out');
      }
    });

    return () => unsubscribe(); //Clean up the listener on unmount
  }, []);

  return (
    <div>Checking Authentication Status</div>
  );
}
export default AuthCheck;