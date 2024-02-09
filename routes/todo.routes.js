import { Router } from "express";
import { 
    addTodo, 
    deleteTodo, 
    editTodo,
    isComplete,
} from "../controllers/todo.controller.js";

const router = Router()

router.route("/add-todo").post(addTodo)
router.route("/edit-todo/:todoId").patch(editTodo)
router.route("/delete-todo/:todoId").delete(deleteTodo)
router.route("/complete/:todoId").put(isComplete)

export default router
