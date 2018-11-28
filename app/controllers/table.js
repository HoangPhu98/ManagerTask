var express = require('express')
var router = express.Router()


// router.get('/', (req, res) => {
//     res.render('pages/table')
// })

router.get('/:table', (req, res) => {
    let name_table = req.params.table;
    console.log(name_table);
    res.render('pages/table')
})

module.exports = router