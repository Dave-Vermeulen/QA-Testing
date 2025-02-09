const ProductAPI = require('../../src/api/productAPI');

describe('ProductAPI - Unit Tests', () => {
    let productAPI;

    beforeEach(() => {
        // a new leaf for each test
        productAPI = new ProductAPI();
    });

    describe('createProduct', () => {
        test('Create a valid product', () => { //its a PASS folks. quick commit 🖱️🖥️💾?!
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

        test('Should reject empty product name', () => { // PASS the crude negative test and throws a rude error
            const invalidProduct = {
                name: "",
                price: 99.99,
                description: "Piele, Poes, Poes, Piele"
            };

            expect(() => {
                productAPI.createProduct(invalidProduct);  
            }).toThrow("Product name is required and watch your language motherfucker 🤬😤!");


            //frothing to make the api cause i can already see it. lets switch over to src/api/productAPI.js then come back and write a test for a long ass name
        });

        test('reject super long product names', () => {
            const invalidProduct = {
                name: "a".repeat(105),
                price: 99.99,
                description: "I can be as long as you want for now, lorem ipsum hop on your broom and fly to the moon and when you there send eme XRP".repeat(5)
            };

            expect(() => {
                productAPI.createProduct(invalidProduct);
            }).toThrow("Product name must be 100 chars or less");

        });
    });

});
