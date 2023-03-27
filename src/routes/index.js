const { Router } = require('express');
const router = Router();

//Raiz
router.get('/',(req,res) => {
    res.json({
        "Titulo" : "hola hdp"
    });
});

module.exports = router;