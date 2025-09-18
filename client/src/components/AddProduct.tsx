import React, { useState } from "react";
import { useProductStore } from "../store/productStore";

const AddProduct: React.FC = () => {
    const { addProduct } = useProductStore();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !price) return;

        const newProduct = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            price: parseFloat(price),
            description
        };

        addProduct(newProduct);
        setName("");
        setPrice("");
        setDescription("");
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
