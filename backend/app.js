import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "20kb"
}))

app.use(express.static("public"))

app.use(cookieParser())


// import routes
import todoRouter from './routes/todo.routes.js'
import userRouter from "./routes/user.routes.js"
import healthRouter from './routes/health.routes.js'

// routes declaration 
app.use("/api/v1/todo", todoRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1", healthRouter)


export {app}