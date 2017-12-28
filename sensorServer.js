var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

//create express app
var app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//mount router middleware
app.use('/', router);
router.get('/', function (req, res) {
    res.render('index', {gasValue: 300});
});

router.post('/', function(req,res){
    if(req.body === {}) {
        res.json({err: 'Empty resquest'})
    }
    else {
        res.render('index', {gasValue: req.body.value});
    }
});


app.listen(app.get('port'), function () {
    console.log(`Server is running on localhost:${app.get('port')}`);
});

module.exports = app;
