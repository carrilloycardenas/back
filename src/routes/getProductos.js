const { Router } = require('express');
const { json } = require('sequelize');
const { models, sequelize } = require('../db/index');
const { Sequelize } = require ("sequelize");
const router = Router();

//Raiz
router.get("/", async (req,res) => {
    try{
        let LstProductos = await sequelize.query('SELECT * FROM Productos as Productos');
        res.json(LstProductos[0])
    }catch(error){
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const { body } = req
    console.log(body)
})

module.exports = router;