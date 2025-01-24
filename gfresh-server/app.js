require('dotenv').config();
const userrouter = require("./routes/userRouter.js");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connectdb = require("./db/connection.js");
const categoryrouter = require("./routes/categoryRouter.js");
const productRouter = require('./routes/productRouter.js');


const app = express();
const port = process.env.PORT || 8000;
const database = process.env.MONGODB_URI;

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
require('./Models/usertable.js');
require('./Models/category.js');
require('./Models/product.js')
connectdb(database)
app.use("/api/user", userrouter);
app.use("/api/category", categoryrouter);
app.use("/api/product", productRouter)


app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
