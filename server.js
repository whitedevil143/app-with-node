if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'.env'})
}//getting path from .env file for mongodb uri
const express = require('express');//importing express
const app = express();//using express with app variable
const expressLayouts = require('express-ejs-layouts');//importing express-ejs-layout
const indexRouter = require('./routes/index')//importing index router from routes folder
const authorRouter = require('./routes/authors')//importing author router from routed folder
const mongoose = require('mongoose');//importing mongoose for mongodb connection
const bodyParser = require('body-parser');//importing body-parser

app.set('view engine', 'ejs' );//setting view engine as ejs
app.set('views', __dirname + '/views' );//setting views folder to /views
app.set('layout', 'layouts/layout');//setting layout to layout.js in /views/layouts

app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: "10mb", extended: false}))

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser:true,useUnifiedTopology: true}) //accesing new connection for mongodb
const db = mongoose.connection//ddeclaring db variable for mongodb connection
db.on('error', error => console.error(error))//if error occurs displays the error
db.once('open', () => console.log("Connected to local database"))//if connecton established t displays the message

app.use('/', indexRouter)//using index router
app.use('/authors', authorRouter)//using author router

app.listen(process.env.PORT || 3000);//setting the port for listening 