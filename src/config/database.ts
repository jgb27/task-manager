import { config } from "dotenv";
config();
import { Sequelize } from "sequelize";

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

console.log(DB_NAME, DB_USER, DB_PASS, DB_HOST);

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres"
})

export default sequelize;
