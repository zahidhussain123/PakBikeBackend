const express = require('express');
const app = express();
const cors = require("cors");

// require('dotenv').config();
// var dburl = process.env.MONGO_DB_URL;
const studentRoute =require('./routes/student');
const facultyRoute =require('./routes/faculty');
const userRoute = require('./routes/user');
const AdRoute = require("./routes/Ad");
const AccessoriesRoute = require("./routes/Accessories");
const rentRoute = require('./routes/Rent');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

// win.loadFile(path.join(__dirname, "uploads/"));
// app.use((req, res, next)=>{
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Origin', 
//     'Origin, X-Requested-With, Content-Type,Accept, Authorization' );
// if (req.method ==='OPTIONS'){

//res.header('Access-Control-Allow-Methods' ,'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
// }
// next();
// });


var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
mongoose.connect(
  "mongodb+srv://bike_api:bike123@cluster0.zjrhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority "
);
mongoose.connection.on('error', err=>{
    console.log('conneccctionnn faileddd.........');
});
mongoose.connection.on('connected', connected=>{
    console.log('connected with database...........');
});
// body parser for data mongoo
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use ('/uploads', express.static('uploads'))


// student faculty js fileeeee

app.use('/student', studentRoute);
app.use('/faculty', facultyRoute);
app.use('/user', userRoute);
app.use("/Ad", AdRoute);
app.use("/Rent", rentRoute);
app.use("/Accessories", AccessoriesRoute);



// app. use ((req, res ,next)=>{
//     res.status(200).json({
//         message:'app is running vvvvvvv'
//     });
// });
// app.use((req, res, next)=>{
//     res.status(404).json({
//         error : 'bad request'
//     })
// })
// error handling
app.use((req, res , next)=>{
    const error = new Error('Nott Foundd')
    error.status=404;
    next(error);
});
// error all handling 
app.use((error , req , res , next)=>{
res.status(error.status || 500);
res.json({
error:{
    message :error.message
}
});
}) ;

module.exports= app;


// Thankyou for your valuable feedback.