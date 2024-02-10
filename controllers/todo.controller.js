import mongoose from "mongoose";
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { Todo } from "../models/todo.model.js";


// CREATE TODOhttp://localhost:8000/api/v1/todo/all-complete-todos
const addTodo = asyncHandler(async(req, res)=>{
    const {title, description} = req.body;

    if(!(title && description)) throw new ApiError(400, "title and description is required")

    const todo = await Todo.create({
        title,
        description,
        owner: req.user?._id
    })

    if(!todo) throw new ApiError(400, "something went wrong while adding todo")

    return res
    .status(201)
    .json( new ApiResponse(200, todo, "Todo Added successfully"))
}) 


// EDIT TODO 
const editTodo = asyncHandler(async(req, res)=> {
    const { todoId } = req.params;
    const {title, description} = req.body;

    if(!todoId) throw new ApiError(400, "Invalid todoId")
    if(!(title && description)) throw new ApiError(400, "titile and description is required")

    const editedTodo = await Todo.findByIdAndUpdate(
        todoId,
        {
            title,
            description
        },
        {new: true}
    )

    if(!editedTodo) throw new ApiError(400, "something went wrong while updating the todo")

    return res
    .status(200)
    .json( new ApiResponse(200, editedTodo, "Todo updated successfully"))
})


// DELETE TODO 
const deleteTodo = asyncHandler( async(req, res)=>{
    const { todoId } = req.params;

    if(!todoId) throw new ApiError(400, "Invalid todoId")

    await Todo.findByIdAndDelete(todoId)

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Todo deleted successfully"))
})

// COMPLETE STATUS CHECK 
const isComplete = asyncHandler(async(req, res)=>{
    const { todoId } = req.params;

    if(!todoId) throw new ApiError(400, "Invalid todo Id")

    const todo = await Todo.findById(todoId)

    if(!todo) throw new ApiError(404, "todo not found")

    todo.completed = true;
    await todo.save()

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "compleated checked"))
})

// AGGREGATION FOR GET ALL COMPLETED TODOS/TASK 
const getAllCompletedTodos = asyncHandler(async(req, res)=>{
    const completeTodos = await Todo.aggregate([
        {
            $match: {
            completed: true
            }
        },
        {
            $addFields: {
            completedTodos: "$completed"
            }
        },
        {
            $project: {
            completedTodos: 1,
            title: 1,
            description: 1,
            createdAt: 1,
            updatedAt: 1
            }
        }
        
        ])

    if(!completeTodos) throw new ApiError(404, "something went wrong while fetching todos")

    return res
    .status(200)
    .json(new ApiResponse(200, completeTodos, "Todos fetched successfully"))
})


// AGGREGATION FOR GET ALL INCOMPLETED TODOS/TASK 
const getAllIncompleteTodos = asyncHandler( async(req, res)=>{
    const incompleteTodos = await Todo.aggregate([
        {
            $match: {
                completed: false
            }
        },
        {
            $addFields: {
                incompleteTodos: "$completed"
            }
        },
        {
            $project: {
                incompleteTodos: 1,
                title: 1,
                description: 1,
                createdAt: 1,
                updatedAt: 1
            }
        }
    ])

    if(!incompleteTodos) throw new ApiError(400, "something went wrong while fetching todos")

    return res
    .status(200)
    .json( new ApiResponse(200, incompleteTodos, "Todos fetched successfully"))
})

export {
    addTodo,
    editTodo,
    deleteTodo,
    isComplete,
    getAllCompletedTodos,
    getAllIncompleteTodos
}