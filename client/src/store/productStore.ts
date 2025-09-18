import { create } from "zustand";

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

interface ProductStore {
    products: Product[];
    fetchProducts: () => Promise<void>;
    addProduct: (product: Product) => void;
    updateProduct: (id: string, updatedProduct: Partial<Product>) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],

    fetchProducts: async () => {
        try {
            const response = await fetch("http://localhost:8080/api/products");
            if (!response.ok) throw new Error("Failed to fetch products");

            const data: Product[] = await response.json();
            set({ products: data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },

    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),

    updateProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map((product) =>
            product.id === id ? { ...product, ...updatedProduct } : product
        ),
    })),
}));
