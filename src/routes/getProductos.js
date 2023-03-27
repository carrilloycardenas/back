const { Router } = require('express');
const { json } = require('sequelize');
const { models } = require('../db/index');
const router = Router();

//Raiz
router.get("/", async (req,res) => {
    try{
        let LstProductos = await models.Productos.findAll();
        res.json(LstProductos);

    }catch(error){
        console.log(error);
    }
});

module.exports = router;