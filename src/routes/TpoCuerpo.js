const express = require("express");
const app = express();
const { TipoCuerpo } = require("../bd/Sequealize");

app.get('/tipo',(req,res)=>{
    TipoCuerpo.findAll().then((tipoCuerpo) => {
        res.status(200).json({ tipoCuerpo });
    });
});


module.exports = app;