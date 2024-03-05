import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyJWT = asyncHandler(async(req, res, next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "acessToken")

        if(!token) throw new ApiError(401, "Unauthorized request")

        const decodedTokenValue = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedTokenValue?._id)
        .select("-password")

        if(!user) throw new ApiError(401, "Invalid access Token")

        req.user = user;
            next()

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})

