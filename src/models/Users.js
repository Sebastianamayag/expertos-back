module.exports=(sequelize,type)=>{
    const User=sequelize.define('User',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type:type.STRING,
            allownull:false
        },
        apellidos:{
            type:type.STRING,
            allownull:false
        },
        talla:{
            type:type.INTEGER,
            allownull:false
        },
        peso:{
            type:type.INTEGER,
            allownull:false
        },
        edad:{
            type:type.INTEGER,
            allownull:false
        }
    },{
        timestamps:false
    })
    return User;
}