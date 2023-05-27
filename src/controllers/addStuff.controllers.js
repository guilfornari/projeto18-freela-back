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

export async function getCities(req, res) {

    try {
        const { rows } = await db.query(`SELECT * FROM cities;`);

        res.status(201).send(rows);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function addTeam(req, res) {
    const { name, photo, logo } = req.body;

    try {
        await db.query(`
                INSERT INTO teams ("name", "photo", "logo")
                VALUES ($1, $2, $3);`, [name, photo, logo]);

        res.status(201).send("Team has been added");

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getTeams(req, res) {

    try {
        const { rows } = await db.query(`SELECT * FROM teams;`);

        res.status(201).send(rows);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

