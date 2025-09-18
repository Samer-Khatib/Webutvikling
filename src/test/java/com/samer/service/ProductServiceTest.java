package com.samer.service;

import com.samer.models.Product;
import com.samer.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllProducts() {
        when(productRepository.findAll()).thenReturn(List.of(new Product("1", "Bike", 499.99, 5)));

        List<Product> products = productService.getAllProducts();

        assertEquals(1, products.size());
        assertEquals("Bike", products.get(0).getName());
    }

    @Test
    void testGetProductById() {
        Product product = new Product("1", "Bike", 499.99, 5);
        when(productRepository.findById("1")).thenReturn(Optional.of(product));

        Optional<Product> found = productService.getProductById("1");

        assertTrue(found.isPresent());
        assertEquals("Bike", found.get().getName());
    }
}
