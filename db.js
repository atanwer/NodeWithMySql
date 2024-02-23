import { Sequelize } from "sequelize";
 

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('employeedb', 'root', 'localhost', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

sequelize.sync({ alter: true })
export default sequelize;