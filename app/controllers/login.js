var express = require('express')
var router = express.Router()
var user = require('../../data/user')

router.get('/', (req, res) => {
    let resData = {
        'status': 1
    }
    res.render('pages/login', {data: resData})
    // res.render('pages/intro');
})

router.post('/', (req, res, next) => {
    // console.log(req.body)
    let account = {
        'username': req.body.username,
        'password': req.body.password
    }

    //Validate accountn
    let flag = false;
    let curUser;
    user.forEach(e => {
        if(account.username == e.username && account.password == e.password){
            flag = true;
            curUser = e;
        }
    })
    if(flag){
        res.cookie('account', curUser, { maxAge: 900000, httpOnly: true })
        res.redirect('http://localhost:3300/')
    }else{
        let resData = {
            'status': 0,
            'message': 'Username or password incorect!'
        }
        
        res.render('pages/login', {data: resData})
    }
})

module.exports = router