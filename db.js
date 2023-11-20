import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
});

const allDrinks = `SELECT name, recipe, instructions FROM drink`;
const drinkByName = `SELECT name, recipe, instructions FROM drink WHERE name = $1`;
const createNewDrink = `INSERT INTO drink (name, recipe, instructions) VALUES ($1, $2, $3); 
`

const now = `SELECT NOW()`;

export const query = {
    allDrinks,
    drinkByName,
    now,
    createNewDrink,
}