module.exports=(sequelize,type)=>{
    const Tipo_Cuerpo=sequelize.define('TipoCuerpo',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        tipo:{
            type:type.STRING,
            allownull:false
        }
    },{
        timestamps:false
    })
    return Tipo_Cuerpo;
}