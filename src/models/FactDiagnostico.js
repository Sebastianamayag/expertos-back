module.exports=(sequelize,type)=>{
    const FactDiagnostico=sequelize.define('Fact',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        Peso:{
            type:type.STRING,
            allownull:false
        },
        Edad:{
            type:type.STRING,
            allownull:false
        },
    },{
        timestamps:true
    })
    return FactDiagnostico;
}