const { Router } = require('express');
const { json, JSON } = require('sequelize');
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
    
    try{
        let LstProductos = await sequelize.query(`CALL AltaProductos(${body.idProductos}, '${body.Nombre}', '${body.descripcion}', ${body.Stock}, ${body.precioUnitario}, '${body.Color}', 1, 1, 1)`);
        res.json('Agregado correctamente');
    }catch(error){
        console.log(error);
    }
});

router.delete('/:id' ,async(req,res)=>{
    try{
        const { id } = req.params;
        console.log(id);
        await models.Productos.destroy({
            where : {
                idProductos : id
            }
        });
        res.json("ok");
    }catch(error){
        console.log(error);
    }
});

router.put('/:id', async(req,res)=>{
    const { id } = req.params;
    const { body } = req;
    
    try{
        let LstProductos = await sequelize.query(`CALL UpdateProductos(${body.idProductos}, '${body.Nombre}', '${body.descripcion}', ${body.Stock}, ${body.precioUnitario}, '${body.Color}', 1, 1, 1)`);
        res.json('Agregado correctamente');
    }catch(error){
        console.log(error);
    }
});

router.post('/venta', async (req, res) => {
    const { body } = req
    
    try{
        let LstProductos = await sequelize.query(`CALL registrarVentas('${body.Fecha}', ${body.idProducto}, ${body.Cantidad}), ${body.precio}`);
        res.json('Agregado correctamente');
    }catch(error){
        console.log(error);
    }
});



module.exports = router;
