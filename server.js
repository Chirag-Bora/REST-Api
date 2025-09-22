const express  = require("express");
const authRoute = require('./src/Routes/authRoutes')
const app = express();


app.use("/api/student",authRoute);

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Node js  Mysql App</h2>");
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log('Server is Running');
})