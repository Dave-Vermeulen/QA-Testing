class ProductAPI{
    constructor(){
        this.products= new Map();
    }

    createProduct(product){
        //validation
        this.validateProduct(product); //failing on 1st round of testing **sigh** ah fucki-it it was meant for future anyway cause i knew we will need it
        //make the ID
        const id = Date.now().toString();
        // store product
        const newProduct= {
            id,
            ...product,
            createdAt: new Date()
        };

        this.products.set(id, newProduct);
        return newProduct;
    }

    getProduct(id) {
        const product = this.products.get(id);
        // handle the error
        if (!product) {
            throw new Error("Haaties, no product 💩🥲💩");
        }

        return product;
    }

    validateProduct(product){
        if(!product.name || product.name.trim().length === 0) {
            throw new Error("Product name is required and watch your language motherfucker 🤬😤!");
        }
        if (product.name.length > 101) {
            throw new Error("Product name must be 100 chars or less");
        }
        if (typeof product.price !== 'number' || product.price < 0) {
            throw new Error("Price must be a valid positive number");
        }
    }
}

module.exports = ProductAPI;