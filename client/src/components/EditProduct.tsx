import React, { useState } from "react";
import { useProductStore } from "../store/productStore";

interface EditProductProps {
    product: { id: string; name: string; price: number; description: string };
    onClose: () => void;
}

const EditProduct: React.FC<EditProductProps> = ({ product, onClose }) => {
    const { updateProduct } = useProductStore();
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price.toString());
    const [description, setDescription] = useState(product.description);

    const handleSubmit = () => {
        updateProduct(product.id, {
            name,
            price: parseFloat(price),
            description,
        });
        onClose();
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" type="number" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default EditProduct;
