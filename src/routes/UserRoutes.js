const express = require("express");
const app = express();
const { Usuarios,Rutinas,FactDiagnostico } = require("../bd/Sequealize");
const { Op } = require("sequelize");
app.get('/users',(req,res)=>{
    Usuarios.findAll().then((users) => {
        res.status(200).json({ users });
    });
})


app.post('/create',async(req,res)=>{
    if(req.body.nombre && req.body.talla && req.body.apellidos){
        Usuarios.create(req.body);
        res.status(200).json({ mensaje: "Usuario Creado correctamente" });
    }else{
        res.status(400).json({ error: 'Todos los campos deben estar llenos' })
    }
})

app.post('/rutina/create',async(req,res)=>{
    if(req.body.cuerpo===2){
        if(req.body.goal==='Bajar'){
            Rutinas.findAll({where: { id: { [Op.between]: [1, 3] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }else if(req.body.goal==='Subir'){
            Rutinas.findAll({where: { id: { [Op.between]: [4, 6] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }else{
            Rutinas.findAll({where: { id: { [Op.between]: [7, 9] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }
    }else if(req.body.cuerpo===1){
        if(req.body.goal==='Bajar'){
            Rutinas.findAll({where: { id: { [Op.between]: [10, 12] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }else if(req.body.goal==='Subir'){
            Rutinas.findAll({where: { id: { [Op.between]: [13, 14] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }else{
            Rutinas.findAll({where: { id: { [Op.between]: [15, 17] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }
    }else{
        if(req.body.goal==='Bajar'){
            Rutinas.findAll({where: { id: { [Op.between]: [18, 19] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }else if(req.body.goal==='Subir'){
            Rutinas.findAll({where: { id: { [Op.between]: [20, 22] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }else{
            Rutinas.findAll({where: { id: { [Op.between]: [23, 25] } }}).then(async(rutinas) => {
                const user=await Usuarios.findOne({
                    limit: 1,
                    where: {
                    },
                    order: [ [ 'id', 'DESC' ]]
                });
                rutinas.forEach(rutina => {
                    FactDiagnostico.create({Peso:req.body.peso,Edad:req.body.edad,UserId:user.id,TipoCuerpoId:req.body.cuerpo,RutinaId:rutina.id});
                });
                res.status(200).json({ rutinas });
            });
        }
    }

})


module.exports = app;
