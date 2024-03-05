import { Router } from "express";
import { 
    addTodo, 
    deleteTodo, 
    editTodo,
    getAllTodos,
    isComplete,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/add-todo").post(verifyJWT, addTodo)
router.route("/edit-todo/:todoId").patch( editTodo)
router.route("/delete-todo/:todoId").delete(verifyJWT, deleteTodo)
router.route("/complete/:todoId").put(verifyJWT, isComplete)
router.route("/all-todos/:userId").get( getAllTodos)

export default router
