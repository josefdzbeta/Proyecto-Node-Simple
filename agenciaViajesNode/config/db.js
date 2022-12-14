import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes', 'root', 'password',{
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    //Configuración de sequelize
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;