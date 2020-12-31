if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'.env'})
}
const express = require('express');//importing express
const app = express();//using express with app variable
const expressLayouts = require('express-ejs-layouts');//importing express-ejs-layout
const indexRouter = require('./routes/index')//importing inder router from routes folder
const mongoose = require('mongoose');//importing mongoose for mongodb connection

app.set('view engine', 'ejs' );//setting view engine as ejs
app.set('views', __dirname + '/views' );//setting views folder to /views
app.set('layout', 'layouts/layout');//setting layout to layout.js in /views/layouts

app.use(expressLayouts);
app.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser:true,useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to local database"))

app.use('/', indexRouter)//using index router

app.listen(process.env.PORT || 3000);//setting the port for listening 