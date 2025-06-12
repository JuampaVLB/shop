import Express, { Router } from "express";
import { handleDeleteProduct, handleCreateProduct, handleGetProduct, handleGetProducts, handleUpdateProduct } from '../controller/product.controller';
const router: Router = Express.Router();

router
    .get('/', handleGetProducts)
    .post('/', handleCreateProduct)
    .put('/:id', handleUpdateProduct)
    .get('/:id', handleGetProduct)
    .delete('/:id', handleDeleteProduct)

export default router; 