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


export {
    addTodo
}