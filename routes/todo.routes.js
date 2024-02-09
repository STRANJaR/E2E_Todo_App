import { Router } from "express";
import { addTodo } from "../controllers/todo.controller.js";

const router = Router()

router.route("/add-todo").post(addTodo)


export default router
