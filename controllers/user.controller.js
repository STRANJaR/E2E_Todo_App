import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"

const createUser = asyncHandler(async(req, res)=>{
    const {fullName, email, username, password} = req.body;

    if(fullName === "") throw new ApiError(400, "Fullname is required")
    if(email === "") throw new ApiError(400, "email is required")
    if(username === "") throw new ApiError(400, "username is required")
    if(password === "") throw new ApiError(400, "password is required")

    const user = await User.create({
        fullName,
        email,
        username: username.toLowerCase(),
        password
    })

    if(!user) throw new ApiError(400, "something went wrong while creating user")

    return res
    .status(201)
    .json(new ApiResponse(200, user, "user creaded successfully"))
})


export {
    createUser
}