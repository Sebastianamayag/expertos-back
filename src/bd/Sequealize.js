const Sequelize=require('sequelize');
//import de los modelos
const Model_Usuarios=require('../models/Users');
const Model_Fact_Diagnostico=require('../models/FactDiagnostico');
const Model_Tipo_Cuerpo=require('../models/TipoCuerpo');
const Model_Rutina=require('../models/RutinasDiagnostico');
//configuracion de la url de la bd
const sequelize = new Sequelize('btdpvkgly7p94oa64ivj', 'uhibvwtve2j9bu3t', 'iD0JOwED1JOdgMfVUE4t', {
    host: 'btdpvkgly7p94oa64ivj-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});
//creando la tablas tablas
const Usuarios=Model_Usuarios(sequelize,Sequelize);
const FactDiagnostico=Model_Fact_Diagnostico(sequelize,Sequelize);
const TipoCuerpo=Model_Tipo_Cuerpo(sequelize,Sequelize);
const Rutinas=Model_Rutina(sequelize,Sequelize);
//FK
Usuarios.hasMany(FactDiagnostico)
FactDiagnostico.belongsTo(Usuarios);

TipoCuerpo.hasMany(FactDiagnostico)
FactDiagnostico.belongsTo(TipoCuerpo);

Rutinas.hasMany(FactDiagnostico)
FactDiagnostico.belongsTo(Rutinas);
//sincronizando squelize
sequelize.sync()
    .then(()=>{
        console.log('Tablas creadas');
    })
module.exports={
    Usuarios,
    FactDiagnostico,
    TipoCuerpo,
    Rutinas
}
