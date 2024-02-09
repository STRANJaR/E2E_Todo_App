import mongoose from "mongoose";
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { Todo } from "../models/todo.model.js";



const addTodo = asyncHandler(async(req, res)=>{
    const {title, description} = req.body;

    if(!(title && description)) throw new ApiError(400, "title and description is required")

    const todo = await Todo.create({
        title,
        description
    })

    if(!todo) throw new ApiError(400, "something went wrong while adding todo")

    return res
    .status(201)
    .json( new ApiResponse(200, todo, "Todo Added successfully"))
}) 



const updateTodo = asyncHandler(async(req, res)=> {
    const { todoId } = req.params;
    const {title, description} = req.body;

    if(!todoId) throw new ApiError(400, "Invalid todoId")
    if(!(title && description)) throw new ApiError(400, "titile and description is required")

    const updatedTodo = await Todo.findByIdAndUpdate(
        todoId,
        {
            title,
            description
        },
        {new: true}
    )

    if(!updatedTodo) throw new ApiError(400, "something went wrong while updating the todo")

    return res
    .status(200)
    .json( new ApiResponse(200, updatedTodo, "Todo updated successfully"))
})

export {
    addTodo,
    updateTodo
}