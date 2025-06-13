export interface FormProduct {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: File | null;
    category: string;
}