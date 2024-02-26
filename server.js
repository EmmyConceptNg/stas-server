import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import * as dotenv from 'dotenv';

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())


import Users from './routes/UsersRoutes.js'



app.use('/api/users', Users)




const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log("connecting to mongodb...");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected 👍🏽");
  } catch (e) {
    console.log("error connecting to mongodb: " + e.message);
  }
});