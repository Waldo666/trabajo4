const express = require("express");
const ProductManager = require("../controllers/product-manager");
const router = express.Router();

const productManager = require("../controllers/product-manager")
const productManager = new ProductManager("./src/models/prodctos.json")

router.get ("/" , async (req, res) => {
    try{
        const productos = await productManager.getProducts();
        
        res.render("home", {productos: productos})
    }catch(error){
        console.log("error al obtener productos", error);
        res.status(500).json({errors: "Error interno del servidor"})
    }
})

module.exports = router;
