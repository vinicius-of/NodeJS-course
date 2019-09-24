const express = require("express");
const bpAPI = require('body-parser');
var app = express(); // Module that exports all in this modules
const urlencodedParser = bpAPI.urlencoded({extended: false});

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

const list = [
    {name: "Joe", dept: "14"},
    {name: "Jonathan", dept: "12"},
];

/*
    HTTP methods:
    GET - app.get
    POST - app.post
    DELETE - app.delete
    PUT
*/

// Dynamic routes using ExpressJS
// Template engines: EJS

//Middleware to serve some static files
// app.use('/assets', (req, res, next) => {
//     console.log(req.url);
//     next();    
// });

//Middleware using ExpressJS
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact', {qs: req.query, list: list});
});

app.post('/contact', urlencodedParser, (req, res) => {
    list.push(req.body);
    res.render('contact', {qs: req.query, list: list});
});

// How to remove the POST data after acting?
// Can we change the urlencoded for another thing?
// What is a Next Handler Function?

app.get('/profile/:name', (req, res) => {
    // res.send('You requested to see a profile with the name of ' + req.params.name);
    const data = { age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'coding'] };
    res.render('profile', {
        person: req.params.name,
        data: data
    });
});

app.listen(3000);
console.log("Listening...");
