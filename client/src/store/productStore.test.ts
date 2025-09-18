import { describe, it, expect } from "vitest";
import { useProductStore } from "./productStore";

describe("Product Store Zustand", () => {
    it("should initialize with an empty product list", () => {
        const { products } = useProductStore.getState();
        expect(products).toEqual([]);
    });

    it("should add a product", () => {
        const { addProduct } = useProductStore.getState();

        addProduct({
            id: "1",
            name: "Bike",
            price: 499.99,
            description: "Mountain Bike"
        });

        const { products } = useProductStore.getState();
        expect(products.length).toBe(1);
        expect(products[0].name).toBe("Bike");
    });
});
