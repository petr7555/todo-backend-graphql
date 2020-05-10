import "reflect-metadata";
import {createConnection} from "typeorm";
import {Todo} from "./entity/Todo";
import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from "body-parser";
import cors = require('cors');

const port = process.env.PORT || 8080;

createConnection().then(async connection => {
    const todoRepository = connection.getRepository(Todo);

    const todos = await connection.manager.find(Todo);
    if (todos.length == 0) {
        console.log("No todos found, inserting sample todos.");
        await connection.manager.save(new Todo("7:00 - 7:30", "Get up"));
        await connection.manager.save(new Todo("7:00 - 7:30", "Brush teeth"));
        await connection.manager.save(new Todo("10:00 - 10:30", "Meet with client"));
        await connection.manager.save(new Todo("14:30 - 15:00", "Buy flowers for gf"));
    }

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.get("/tasks", async function (req: Request, res: Response) {
        const tasks = await todoRepository.find();
        res.send(tasks);
    });

    app.get("/tasks/all/time-slot/:timeSlot", async function (req: Request, res: Response) {
        const results = await todoRepository.find({timeSlot: req.params.timeSlot});
        res.send(results);
    });

    app.get("/tasks/:id", async function (req: Request, res: Response) {
        const task = await todoRepository.findOne(req.params.id);
        res.send(task);
    });

    app.post("/tasks", async function (req: Request, res: Response) {
        const task = await todoRepository.create(req.body);
        const results = await todoRepository.save(task);
        res.send(results);
    });

    app.put("/tasks/:id", async function (req: Request, res: Response) {
        const task = await todoRepository.findOne(req.params.id);
        todoRepository.merge(task, req.body);
        const results = await todoRepository.save(task);
        res.send(results);
    });

    app.delete("/tasks/:id", async function (req: Request, res: Response) {
        const results = await todoRepository.delete(req.params.id);
        res.send(results);
    });

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}).catch(error => console.log(error));
