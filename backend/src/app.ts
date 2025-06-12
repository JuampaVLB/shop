import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { PORT } from "./helpers/constans";

// Routes
import productRoutes from './routes/product.routes';

const app = express();

// Settings
app.use(express.json());
app.use(cors({
    origin: "*",
}));

// Routes
app.use('/api/v1/product', productRoutes);

app.listen(PORT, () => {
    console.log("Server On Port: " + PORT);
});
