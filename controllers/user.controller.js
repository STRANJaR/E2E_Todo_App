import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"


const generateAccessToken = async(userId)=>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessTokens()

        return {accessToken}
    } catch (error) {
        throw new ApiError(500, "something went wrong while generating accesstoken")
    }
}


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


const loginUser = asyncHandler(async(req, res)=>{
    const {email, username, password} = req.body;

    if(!(email || username)) throw new ApiError(400, "email or username is required fields")

    const userValidation = await User.findOne({
        $or: [
            {
                email
            },
            {
                username
            }
        ]
    }) 

    if(!userValidation) throw new ApiError(404, "User not found")

    const isPasswordValid = await userValidation.isPasswordCorrect(password)

    if(!isPasswordValid) throw new ApiError(400, "Invalid credentials")

    const { accessToken } = await generateAccessToken(userValidation._id)
    
    // ASSIGNMENT:
    // if(!accessToken) throw new ApiError(400, "TOKEN not found")
    const loggedInUser = await User.findById(userValidation._id)
    .select("-password")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(
        200,
        {
            user: loggedInUser, accessToken
        },
        "User logged In successfully"
    ))
})


const logoutUser = asyncHandler(async(req, res)=>{
    
    const options = {
        httpOnly: true,
        secure: true
    }


    return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"))
})

export {
    createUser,
    loginUser,
    logoutUser
}