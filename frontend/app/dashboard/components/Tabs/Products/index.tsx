import { useEffect, useState } from "react";
import { tabsHeaderData } from "../../../constans"
import { CardProduct } from "../../CardProduct";
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader"
import { ModalProduct } from "../../Modals/ModalProduct";
import { deleteProduct, getProducts } from "../../../../../api/productApi";
import { toast } from "sonner";

export const Products = () => {
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const header = tabsHeaderData[0];

    const fetchProducts = async () => {
        try {
            const res = await getProducts();
            setProducts(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        try {
            console.log({ id });

            await deleteProduct(id);
            toast.success("Product deleted successfully");
            fetchProducts();
        } catch (error) {
            console.error("Failed to delete product", error);
            toast.error("Failed to delete product");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <TabsContainer>
            <TabsHeader {...header} onAddProduct={() => setOpenModal(true)} onSearch={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-scroll max-h-[60vh]">
                {filteredProducts.map((data, idx) => (
                    <CardProduct key={idx} onOpenModal={() => {
                        setSelectedProduct(data);
                        setOpenModal(true);
                    }} onDelete={() => handleDelete(data.id)} data={data} />
                ))}
            </div>

            <ModalProduct open={openModal} onOpenChange={setOpenModal} initialData={selectedProduct} />
        </TabsContainer>
    )
}