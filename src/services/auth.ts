import { auth } from "./firebase";

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signInWithEmail = async (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};
