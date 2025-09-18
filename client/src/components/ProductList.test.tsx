import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { useProductStore } from "../store/productStore";

vi.mock("../store/productStore", () => ({
    useProductStore: () => ({
        products: [{ id: "1", name: "Bike", price: 499.99, description: "Mountain Bike" }],
    }),
}));

test("renders product list", () => {
    render(<ProductList />);
    expect(screen.getByText("Bike")).toBeInTheDocument();
});
