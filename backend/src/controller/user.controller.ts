import { Request, Response } from "express";
import { db } from "../utils/firebase";

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const usersSnapshot = await db.collection("users").get();

    const users = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};