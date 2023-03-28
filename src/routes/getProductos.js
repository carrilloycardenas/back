const { Router } = require('express');
const { json } = require('sequelize');
const { models, sequelize } = require('../db/index');
const { Sequelize } = require ("sequelize");
const router = Router();


//Raiz
router.get("/", async (req,res) => {
    try{
        let LstProductos = await sequelize.query('SELECT * FROM Productos');
        if(LstProductos != null){
            res.json(LstProductos);
        }else{
            res.status(404).json({
                msg: 'no se encontro el articulo'
            })
        }

    }catch(error){
        console.log(error);
    }
});


module.exports = router;