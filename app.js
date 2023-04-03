import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);


import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitController from "./controllers/tuits/tuits-controller.js"
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors())
TuitController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)