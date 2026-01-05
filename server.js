const  express = require("express");
const app = express();
require("dotenv").config();
const PORT= process.env.PORT


app.listen(PORT,() => {
    console.log("my server is  start  on" , PORT);
})

// middleware 
app.use(express.json());

//default mounting
const router = require("./routes/todos");
app.use("/tpi/v1",router);

const dbconnect = require("./config/database.");
dbconnect();

app.get("/" , (req,res) => {
res.send("to do app")  
})


