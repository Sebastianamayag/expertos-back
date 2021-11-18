module.exports=(sequelize,type)=>{
    const RutinasDiagnostico=sequelize.define('Rutinas',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        Nombre:{
            type:type.STRING,
            allownull:false
        },
        Nivel:{
            type:type.STRING,
            allownull:false
        },
        Ejercicios:{
            type:type.STRING,
            allownull:false
        }
    },{
        timestamps:false
    })
    return RutinasDiagnostico;
}