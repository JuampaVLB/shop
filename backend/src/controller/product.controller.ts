import { Request, Response } from "express";

export const handleCreateProduct = (req: Request, res: Response) => {
     res.send("Create Product");
}

export const handleUpdateProduct = (req: Request, res: Response) => {
     res.send("Update Product");
}

export const handleGetProducts = (req: Request, res: Response) => {
     res.send("Get Products");
}

export const handleGetProduct = (req: Request, res: Response) => {
     res.send("Get Product");
}

export const handleDeleteProduct = (req: Request, res: Response) => {
     res.send("Delete Product");
}