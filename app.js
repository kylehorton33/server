import express from 'express';
import cors from 'cors';
const app = express()
app.use(cors())
const port = process.env.PORT || 5000;

import 'dotenv/config'
import { pool, query } from "./db.js";

app.get('/', (req, res) => {
    res.json({ debug: "Kyle's Personal API -  2023.11.19" })
})

app.get('/echo', (req, res) => {
    res.json({ content: req.headers})
})

app.get("/all", async (req, res) => {
    console.log(pool.options)
    try {
        const result = await pool.query(query.allDrinks);
        res.json(result.rows)
    } catch (err) {
        res.json({ error: err.message, debug: pool.options })
    }
})

app.get("/:slug", async (req, res) => {
    const slug = req.params.slug;
    try {
        const result = await pool.query(query.drinkByName, [slug]);
        if (result.rows.length) {
            let drink = result.rows[0]
            const recipe = await pool.query(query.recipeByDrinkName, [slug])
            drink["recipe"] = recipe.rows
            res.json(drink)
        } else {
            res.json({ "error": `No results found for '${slug}'`})
        }
    } catch (err) {
        res.json({ "error": err.message })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})