import { db } from "../database/db.connection.js";

export async function addCity(req, res) {
    const { name, description, photo } = req.body;

    try {
        await db.query(`
                INSERT INTO cities ("name", "description", "photo")
                VALUES ($1, $2, $3);`, [name, description, photo]);

        res.status(201).send("City has been added");

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getCity(req, res) {

    try {
        const { rows } = await db.query(`SELECT * FROM cities;`);

        res.status(201).send(rows);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

