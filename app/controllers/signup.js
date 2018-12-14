var express = require('express')
var router = express.Router()
var user = require('../../data/user')

router.get('/', (req, res) => {
    let resData = {
        'status': 1
    }
    res.render('pages/signup', {data: resData})
})

router.post('/', (req, res) => {
    let newAccount = {
        'username': req.body.username,
        'password': req.body.password,
        're_password': req.body.re_password
    }
    let flagExist = true;
    user.forEach(e => {
        if(e.username == newAccount.username){
            flagExist = false;
        }
    })

    if(!flagExist){
        let resData = {
            'status': 0,
            'message': 'username has exist'
        }
        res.render('pages/signup', {data: resData})
    }else{
        if(newAccount.password != newAccount.re_password){
            let resData = {
                'status': 0,
                'message': 'password and re-password not match'
            }
            res.render('pages/signup', {data: resData})
        }else{
            let newUser = {
                id: user.length,
                username: newAccount.username,
                fullName: '',
                password: newAccount.password,
                birthday: '',
                newUser: true 
            }
            user.push(newUser)
            res.cookie('account', newUser, { maxAge: 900000, httpOnly: true })
            res.redirect('http://localhost:3300')
        }
    }

    res.send('hello')
})

module.exports = router