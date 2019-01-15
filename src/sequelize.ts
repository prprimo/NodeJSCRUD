import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'mssql',
    operatorsAliases: Sequelize.Op as any,
    host: 'localhost',
    port: 1433,
    database: 'NODEJSCRUD', 
    username: 'sa', 
    password: '!QA2ws3ed', 
    modelPaths: [__dirname + '/models']
});
