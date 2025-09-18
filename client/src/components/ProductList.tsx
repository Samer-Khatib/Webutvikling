import { useEffect } from "react";
import { useProductStore } from "../store/productStore";

const ProductList = () => {
    const { products, fetchProducts } = useProductStore();

    useEffect(() => {
        fetchProducts();

        const socket = new WebSocket("ws://localhost:8080/ws/products");

        socket.onmessage = (event) => {
            console.log("WebSocket message:", event.data);
            fetchProducts();
        };

        return () => socket.close();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>{product.name} - ${product.price}</div>
            ))}
        </div>
    );
};

export default ProductList;
