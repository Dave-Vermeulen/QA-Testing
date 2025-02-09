const ProductAPI = require('../../src/api/productAPI');

describe('Product Workflow - Integration Tests', () => {
    let productAPI;

    beforeEach(() => {
        productAPI = new ProductAPI();
    });

    test('create and retrieve product', () => { // this works. so relieved. can finally commit.
        // create product
        const newProduct = {
            name: "Integration Test Product With A Name Thats Not Too Long",
            price: 1999.99,
            description: "Testing the full workflow"
        };
    
        const created = productAPI.createProduct(newProduct);

        // play fetch and verify
        const retrieved = productAPI.getProduct(created.id);

        expect(retrieved).toEqual(created);
    });
});