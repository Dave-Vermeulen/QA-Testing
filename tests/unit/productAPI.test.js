const ProductAPI = require('../../src/productAPI');

describe('ProductAPI - Unit Tests', () => {
    let productAPI;

    beforeEach(() => {
        // a new leaf for each test
        productAPI = new ProductAPI();
    });

    describe('createProduct', () => {
        testProduct('Create a valid product', () => {
            const testProduct = {
                name:"Test Product",
                price: 99.99,
                description: "Test Description"
            };

            const result = productAPI.createProduct(testProduct);

            expect(result).toHaveProperty('id');
            expect(result.name).toBe(testProduct.name)
            expect(result.price).toBe(testProduct.price);
            expect(result.createdAt).toBeInstanceOf(Date);
        });

        test('Should reject empty product name', () => {
            const invalidProduct = {
                name: "",
                price: 99.99,
                description: "Piele, Poes, Poes, Piele"
            };

            expect(() => {
                productAPI.createProduct(invalidProduct);  
            }).toThrow("Product name is required and watch your language motherfucker!");


            //forthing to make the api cause i can already see it. lets switch over to src/api/productAPI.js then come back and write a test for a long ass name
        });

    });

});