import { Router } from "express";
import { addTodo, updateTodo } from "../controllers/todo.controller.js";

const router = Router()

router.route("/add-todo").post(addTodo)
router.route("/update-todo/:todoId").patch(updateTodo)


export default router
