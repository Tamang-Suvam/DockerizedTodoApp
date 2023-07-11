import mongoose from 'mongoose'
import dotenv from 'dotenv';

// Initializing the dotenv module
dotenv.config();

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = () => {
  // this connection string used for cloud.mongodb database
  // const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todocluster.asla97e.mongodb.net/?retryWrites=true&w=majority`

  // Now for dockerization we use the below string
  // We can uncomment and use any connection string of our choice
  const MONGODB_URI = 'mongodb://mongo:27017/todos'

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
  })

  // If the connection is successful
  mongoose.connection.on('connected', () => {
    console.log("MongoDB Database connected successfully!")
  })

  // If the connection gets disconnected
  mongoose.connection.on('disconnected', () => {
    console.log("MongoDB Database disconnected!")
  })

  // If the connection leads to an error
  mongoose.connection.on('error', (error) => {
    console.log("Error while connecting to the database ", error.message)
  })
}

export default Connection