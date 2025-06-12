import Express, { Router } from "express";
import { handleDeleteProduct, handleCreateProduct, handleGetProduct, handleGetProducts, handleUpdateProduct } from '../controller/product.controller';
import { schemaValidation } from "../middlewares/validator.middleware";
import { createProductSchema } from "../schemas/product.schemas";
const router: Router = Express.Router();

router
    .get('/', handleGetProducts)
    .post('/', schemaValidation(createProductSchema), handleCreateProduct)
    .put('/:id', handleUpdateProduct)
    .get('/:id', handleGetProduct)
    .delete('/:id', handleDeleteProduct)

export default router; 