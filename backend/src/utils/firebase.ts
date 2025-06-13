import admin from "firebase-admin";
import serviceAccount from "../config/shop-1eb4d-firebase-adminsdk-fbsvc-4a8265e171.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const db = admin.firestore();