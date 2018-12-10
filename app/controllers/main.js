var express = require('express')
var router = express.Router()
router.get('/', 
    // (req, res, next) => {
    //     console.log("cookie: ")
    //     console.log(req.cookies)
    //     if('username' in req.cookies){
    //         next()
    //     }else{
    //         res.redirect('/login')
    //     }
    // }, 
    (req, res) => {
        console.log("Home")
        res.render('main')
    }
)

module.exports = router