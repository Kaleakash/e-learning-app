const express=require('express'); 
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const adminRouter = require("./router/adminRouter");
const facultyRouter = require("./router/facultyRouter");
const courseRouter = require("./router/courseRouter");
const studentRouter = require("./router/studentRouter");
const scfRelationshipRouter = require("./router/scfRelationshipRouter");
const db = require("./config/dbConfig");

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.json({ type:"application/json" }));
app.use(cors());

// router middleware 
app.use("/api/admin",adminRouter);
app.use("/api/faculty",facultyRouter);
app.use("/api/course",courseRouter);
app.use("/api/student",studentRouter);
app.use("/api/scfrelationship",scfRelationshipRouter);

app.listen(port,()=>console.log(`Server running on port ${port} number`));

