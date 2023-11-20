import express from 'express';
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json()); 
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
        console.log(result)
        res.json(result.rows[0])
    } catch (err) {
        res.json({ "error": err.message })
    }
})

app.post("/new", async (req, res) => {
    const newDrink = req.body;
    try {
        const { name, recipe, instructions } = newDrink;
        const result = await pool.query(query.createNewDrink, [name, recipe, instructions])
        res.json(result)
    } catch (err) {
        res.json({ "error": err.message })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})