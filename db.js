import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
});

const allDrinks = `
    SELECT
        drink.name,
        STRING_AGG(recipe.ingredient, ', ') AS ingredients,
        drink.instructions
    FROM drink JOIN recipe ON drink.name = recipe.drink
    GROUP BY drink.name;
    `
const drinkByName = `
    SELECT
    drink.name,
    STRING_AGG(recipe.ingredient, ', ') AS ingredients,
    drink.instructions
    FROM drink JOIN recipe ON drink.name = recipe.drink
    WHERE drink.name = $1
    GROUP BY drink.name;
    `

const recipeByDrinkName = `
    SELECT amount, ingredient
    FROM recipe
    WHERE recipe.drink = $1;
`

const createNewDrink = `
    INSERT INTO drink (name, instructions)
    VALUES ($1, $2); 
`

const now = `SELECT NOW()`;

export const query = {
    allDrinks,
    drinkByName,
    now, recipeByDrinkName,
    createNewDrink,
}