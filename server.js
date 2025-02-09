// server.js
const express = require('express');
const path = require('path');
const ProductAPI = require('./src/api/productAPI');

class ProductServer {
    constructor() {
        // init express app. builds the castle
        this.app = express();

        // init the product management system. the castles plumbing and electrical and thats needed for it to be used as a castle.
        this.productAPI = new ProductAPI();

        // setup middleware. this is like the guards that check the visitors at the castle.
        this.setupMiddleware();

        //setup routes this is the paths and walkways of the castle
        this.setupRoutes();

        // error handling. part of castle defense.
        this.setupErrorHandling();
    }

    setupMiddleware() {
        // parse JSON. translates the visitors language to the castle language
        this.app.use(express.json());

        // serve static files from 'public' dir. this is castles public areas.
        this.app.use(express.static('public'));

        // request log. a log of castle visitors.
        this.app.use((req, res, next) => {
            console.log('${new Date().toISOString()} - ${req.method} - ${req.method} ${req.path}');
            next();
        });
    }

    setupRoutes() {
        // create product
        this.app.post('./api/products', async (req, res, next) => {
            try {
                const product = this.productAPI.createProduct(req.body);
                res.status(201).json({
                    success: true,
                    data: product
                });
            } catch (error) {
                next(error); //passes to error handler
            }
        });

        // get specific product
        this.app.get('/api/products/:id', async (req, res, next) => {
            try {
                const product = this.productAPI.getProduct(req.params.id);
                res.json({
                    success: true,
                    data: product
                });
            } catch (error) {
                next(error);
            }
        });

        // get all products with optional filters
        this.app.get('/api/products', async (req, res, next) => {
            try {
                const { limit = 10, page = 1 } = req.query;
                const products = Array.from(this.productAPI.products.values());

                // basic pagination. needs work
                const startIndex = (page -1) * limit;
                const paginatedProducts = products.slice(startIndex, startIndex + parseInt(limit));

                res.json({
                    success: true,
                    data: paginatedProducts,
                    pagination: {
                        total: products.length,
                        page: parseInt(page),
                        limit: parseInt(limit)
                    }
                });
            } catch (error) {
                next(error);
            }
        });

        // update product
        this.app.put('/api/products/:id', async (req, res, next) => {
            try {
                const updateProduct = this.productAPI.updateProduct(req.params.id, req.body);
                res.json({
                    success: true,
                    data: updatedProduct
                });
            } catch (error) {
                next(error);
            }
        });

        // delete product
        this.app.delete('/api/products/:id', async (req, res, next) => {
            try {
                this.productAPI.deleteProduct(req.params.id);
                res.status(204).send();
                } catch (error) {
                    next(error);
                }
            });
        }

        setupErrorHandling() {
            // handling 404s for the homies that get lost
            this.app.use((req, res, next) => {
                res.status(404).json({
                    success: false,
                    error: 'Resource not found'
                });
            });

            // sec errors
            this.app.use((error, req, res, next) => {
                console.error(error);

                res.status(error.status || 500).json({
                    success: false,
                    error: error.message || 'this server doesnt like you'
                });
            });
        }

        start(port = 3000) {
            return this.app.listen(port, () => {
                console.log('Server running on http://locahost:${port}');
            });
        }
    }

    //create & start server
    const server = new ProductServer();
    server.start();

    module.exports = server; // for testings sake
