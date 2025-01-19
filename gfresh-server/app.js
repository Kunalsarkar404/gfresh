const userrouter = require("./routes/userRouter.js");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connectdb = require("./db/connection.js");
const app = express();
const port = 8000;
const database = 'mongodb+srv://vjkunal00:Bubunsarkar123@cluster0.fv14d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
require('./Models/usertable.js')
connectdb(database)
app.use("/api/user", userrouter);


app.listen(port, () => {
    console.log(`server is running at ${port}`);
});

//vjkunal00
//Bubunsarkar123