const express = require('express');
const PORT = process.env.PORT || 5000;

const {Pool} = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});
pool.connect()
    .then(client => client.query('CREATE TABLE IF NOT EXISTS todos (id SERIAL PRIMARY KEY, text TEXT)'))
    .catch(err => console.error("Couldn't create todos table.", err));

const bodyParser = require('body-parser');
app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/todos', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM todos');
        console.info("A todos have been queried.");
        res.send(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(PORT, () => console.info(`Listening on ${PORT}`));




