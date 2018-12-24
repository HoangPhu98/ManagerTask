var express = require('express')
var router = express.Router()
var user = require('../../data/user')

var checkAccount = (req, res, next) => {
    console.log(req.cookies.account)
    let account = req.cookies.account;
    
    if(account != undefined){
        let flag = false;
        user.forEach(e => {
            if(e.username == account.username && e.password == account.password){
                flag = true;
            }
        })
        if(flag){
            next();
        }else{
            // res.redirect('/login')
            res.render('pages/intro')
        }
    }else{
        // res.redirect('/login')
        res.render('pages/intro')
    }
}

router.get('/', checkAccount
    , (req, res) => {
        console.log("Home")
        res.render('main')
    }
)

module.exports = router