var express = require('express')
var router = express.Router()

router.get('/', 

    (req, res) => {
        console.log("Home")
        res.render('pages/home')
    }
)


module.exports = router