var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/table')
})

module.exports = router