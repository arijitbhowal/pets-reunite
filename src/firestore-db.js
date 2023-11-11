import { getFirestore } from 'firebase/firestore';

function userCollection(user) {
  const firestore = getFirestore();
  
  firestore.collection('users').doc(user.uid).set({
    uid: user.uid,
    name: user.fullName,
    email: user.email,
    lastLogin: new Date(),
    phone: "",
  }, { merge: true });
}

export default userCollection;
