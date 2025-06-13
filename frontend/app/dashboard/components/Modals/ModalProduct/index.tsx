import { Banknote, BookOpenText, Image, Layers, ListFilter, ShoppingCart, } from "lucide-react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../../../../components/ui/dialog"
import { Label } from "../../../../../components/ui/label";
import { Input } from "../../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../components/ui/select";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "../../../../../components/ui/button";
import { useEffect, useState } from "react";
import { FormProduct } from "../../../../../types/Product";
import { createProduct, updateProduct } from "../../../../../api/productApi";
import { toast } from "sonner";

interface ModalProductProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: FormProduct;
}

export const ModalProduct = ({ open, initialData, onOpenChange }: ModalProductProps) => {

    const [form, setForm] = useState<FormProduct | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!form) return;

        let imageUrl = initialData?.image ?? null;

        if (form.image instanceof File) {
            const storage = getStorage();
            const storageRef = ref(storage, `products/${form.image.name}`);
            await uploadBytes(storageRef, form.image);
            imageUrl = await getDownloadURL(storageRef);
        }

        const productData = {
            ...form,
            image: imageUrl,
        };

        try {
            if (initialData?.id) {
                await updateProduct(initialData?.id, form);
                toast.success("Product successfully updated");
            } else {
                await createProduct(productData);
                toast.success("Product successfully created");
            }

            onOpenChange(false);
            window.location.reload();
        } catch (error) {
            toast.error(error.response.data[0].message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (open) {
            setForm(initialData ?? {
                name: "",
                description: "",
                price: 0,
                stock: 0,
                image: null,
                category: "",
            });
        }
    }, [open, initialData]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl text-red-600">Create Product</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="space-y-2 w-full mt-5">
                        <Label htmlFor="signin-email" className="text-red-600">
                            Product Name
                        </Label>
                        <div className="relative">
                            <ShoppingCart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter product name"
                                value={form?.name}
                                onChange={(e) => setForm(prev => prev ? { ...prev, name: e.target.value } : null)}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2 w-full">
                        <Label htmlFor="signin-email" className="text-red-600">
                            Description
                        </Label>
                        <div className="relative">
                            <BookOpenText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                            <Input
                                id="description"
                                type="text"
                                placeholder="Enter description"
                                value={form?.description}
                                onChange={(e) => setForm(prev => prev ? { ...prev, description: e.target.value } : null)}
                                className="pl-10"
                                required
                            />
                        </div>

                        <div className="flex justify-between mt-5">
                            <div className="space-y-2">
                                <Label htmlFor="signin-email" className="text-red-600">
                                    Price ($)
                                </Label>
                                <div className="relative">
                                    <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                                    <Input
                                        id="price"
                                        type="number"
                                        placeholder="0.00"
                                        value={form?.price ?? 0}
                                        onChange={(e) => setForm(prev => prev ? { ...prev, price: parseFloat(e.target.value) } : null)}
                                        className="pl-10"
                                        required
                                    />
                                </div>

                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="stock" className="text-red-600">
                                    Stock
                                </Label>
                                <div className="relative">
                                    <Layers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                                    <Input
                                        id="signin-fullname"
                                        type="number"
                                        placeholder="0"
                                        value={form?.stock ?? 0}
                                        onChange={(e) => setForm(prev => prev ? { ...prev, stock: parseInt(e.target.value) } : null)}
                                        className="pl-10"
                                        required
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between gap-10">

                        <div className="space-y-2 w-full">
                            <Label htmlFor="signin-email" className="text-red-600">
                                Image
                            </Label>
                            <div className="relative">
                                <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                                <Input
                                    id="signin-fullname"
                                    type="file"
                                    onChange={(e) => setForm(prev => prev ? { ...prev, image: e.target.files?.[0] ?? null } : null)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 w-full">
                            <Label htmlFor="signin-email" className="text-red-600">
                                Category
                            </Label>
                            <div className="relative flex">
                                <ListFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />

                                <Select
                                    value={form?.category ?? ""}
                                    onValueChange={(value) => setForm(prev => prev ? { ...prev, category: value } : null)}
                                >
                                    <SelectTrigger className="w-full pl-9">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="electronics">Electronics</SelectItem>
                                        <SelectItem value="clothing">Clothing</SelectItem>
                                        <SelectItem value="home">Home & Kitchen</SelectItem>
                                        <SelectItem value="books">Books</SelectItem>
                                        <SelectItem value="toys">Toys</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>

                    </div>

                    <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                        disabled={!form?.name || !form.description || !form.price || !form.stock || !form.category}
                    >
                        {loading ? "Loading..." : "Confirm"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};