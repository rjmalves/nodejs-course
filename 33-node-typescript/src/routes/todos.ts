import { Router } from "express";
import { Todo } from "../models/todo";

type RequestParams = {todoId: string};
type RequestBody = {text: string};

let todos: Array<Todo> = [];

const router = Router();

router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    };

    todos.push(newTodo);
    return res.status(201).json({message: "Added todo!", todo: newTodo, todos: todos});
})

router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex((todo) => {return todo.id === tid});
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        }
        return res.status(200).json({message: "Updated todo!"});
    }
    res.status(404).json({message: "Could not find todo for this id."});
});

router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params as RequestParams;
    todos = todos.filter(todo => {
        return todo.id !== params.todoId;
    });
    res.status(200).json({message: "Deleted todo!"});
});

export default router;