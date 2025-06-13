import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { PORT } from "./helpers/constans";

// Routes
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';

const app = express();

// Settings
app.use(express.json());
app.use(cors({
    origin: "*",
}));

// Routes
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
    console.log("Server On Port: " + PORT);
});
