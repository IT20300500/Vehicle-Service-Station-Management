const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

//middleware (cors mw and 2nd is to parse json)
app.use(cors())
app.use(express.json())

//stablish mongodb connection by this method
//as 1st parameter we have to pass our mongodb link
mongoose
  .connect(
    'mongodb+srv://itpmproject-2022:ALUA6wvovypYEDHd@itpm-project-2022.dxsfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .then(() => {
    console.log('Mongo DB Connected')
  })
  .catch((err) => [console.log(err)])

//http://localhost:3001/api/Customer
//if someone give above url it will point to the below 2nd parameter(routes file)




//this is useful when hosting the app.
//this will assign given port number by server if not assigned 5000
const PORT = process.env.PORT || 3001

//pass that as 1st param
//2nd para is a function, it displays msg in console if server goo
app.listen(PORT, () => {
  console.log('Server is Running')
})
