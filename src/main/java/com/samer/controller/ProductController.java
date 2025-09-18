package com.samer.controller;

import com.samer.config.CustomWebSocketHandler;
import com.samer.models.Product;
import com.samer.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CustomWebSocketHandler webSocketHandler;  // Inject WebSocket handler

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        Product savedProduct = productRepository.save(product);
        webSocketHandler.broadcast("Product Added: " + savedProduct.getName());
        return savedProduct;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable String id, @RequestBody Product product) {
        product.setId(id);
        Product updatedProduct = productRepository.save(product);
        webSocketHandler.broadcast("Product Updated: " + updatedProduct.getName());
        return updatedProduct;
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id) {
        productRepository.deleteById(id);
        webSocketHandler.broadcast("Product Deleted: " + id);
    }
}
