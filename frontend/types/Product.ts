export interface FormProduct {
    name: string;
    description: string;
    price: number;
    stock: number;
    image: File | null;
    category: string;
}