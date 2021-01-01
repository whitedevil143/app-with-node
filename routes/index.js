const express = require('express');//importing express
const router = express.Router();//importing routers from express

router.get('/', (req, res)=>{//getting '/' router for index page
    res.render('index')
})

module.exports = router;//exporting the router function