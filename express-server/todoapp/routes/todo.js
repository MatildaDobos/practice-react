var express = require("express");
var router = express.Router();
var fs = require("fs");
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

router.get('/', function(req, res, next) {
  fs.readFile('output.json', function (err, data) {
        if (err) {
            console.log("An error occured while reading JSON Object to File.");
            return console.log(err);
        }
        var json = JSON.parse(data);
        res.send(json);
    })
});

router.get('/:id', function(req, res) {
    console.log('Id: ' + req.params.id);
    fs.readFile('output.json', function (err, data) {
        if (err) {
            console.log("An error occured while reading JSON Object to File.");
            return console.log(err);
        }
        var json = JSON.parse(data);
        var todo = json.find(x => x.id === req.params.id);
        res.send(todo);
    })
});

router.post('/', jsonParser, function(req, res, next) {
    fs.readFile('output.json', function (err, data) {
        if (err) {
            console.log("An error occured while reading JSON Object to File.");
            return console.log(err);
        }
        var json = JSON.parse(data);
        json.push(req.body);
        fs.writeFile("output.json", JSON.stringify(json), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        
            console.log("JSON file has been saved.");
            res.send('respond with a resource for todo: JSON file has been saved');
        });
    })
});

router.post('/:id', jsonParser, function(req, res, next) {
    var content = req.body;
    console.log('Content: ', content);
    var id = req.params.id;

    fs.readFile('output.json', function (err, data) {
        if (err) {
            console.log("An error occured while reading JSON Object to File.");
            return console.log(err);
        }
        var json = JSON.parse(data);
        json.forEach((item, index) => {
            if(item.id === id) {
                json[index] = req.body
                return;
            }
        });
        fs.writeFile("output.json", JSON.stringify(json), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        
            console.log("JSON file has been saved.");
            res.send('respond with a resource for todo: JSON file has been saved');
        });
    })
});

module.exports = router;

