import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        lowerCase: true
    },
    email: {
        type: String,
        required: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
}, {timestamps: true})


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return nuxt()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessTokens = function(){
    return jwt.sign(
        {
            // payload(data): database 
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User", userSchema)