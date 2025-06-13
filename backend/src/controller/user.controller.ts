import { Request, RequestHandler, Response } from "express";
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

export const handleUpdateUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { fullname, role } = req.body;

    const userRef = db.collection("users").doc(id);
    const doc = await userRef.get();

    if (!doc.exists) {
      res.status(404).json({ error: "User not found" });
    }

    await userRef.update({
      fullname,
      role,
    });

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};