import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import { getProducts } from "../api/productApi";

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
      toast.error("Failed to fetch products");
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    refetch: fetchProducts,
  };
};
