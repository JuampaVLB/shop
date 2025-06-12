import { Request, RequestHandler, Response } from "express";
import { db } from "../utils/firebase";

export const handleCreateProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;

        const docRef = await db.collection("products").add(productData);

        res.status(201).json({ id: docRef.id, message: "Product created successfully" });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Failed to create product" });
    }
}

export const handleUpdateProduct: RequestHandler = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedData = req.body;

        const productRef = db.collection("products").doc(productId);
        const doc = await productRef.get();

        if (!doc.exists) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        await productRef.update(updatedData);

        res.json({ message: "Product updated successfully" });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}

export const handleGetProducts = async (_req: Request, res: Response) => {
    try {
        const snapshot = await db.collection("products").get();

        const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
}

export const handleGetProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;

        const productRef = db.collection("products").doc(productId);
        const doc = await productRef.get();

        if (!doc.exists) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        res.json({
            id: doc.id,
            ...doc.data()
        });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Failed to fetch product" });
    }
}

export const handleDeleteProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;

        const productRef = db.collection("products").doc(productId);
        const doc = await productRef.get();

        if (!doc.exists) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        await productRef.delete();

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: "Failed to delete product" });
    }
}