const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const fs = require("fs");

app.get('/humidity/:epoch', (req, res) => {

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    let con = mysql.createConnection({
        host: "localhost",
        user: "isen",
        password: "isen123",
        database: "isen"
    });

    con.connect((err) =>{
        if (err) throw err;
        con.query(`SELECT * FROM Humidity where timestamp >= ${epoch} and timestamp <= ${endEpoch}`, (err,result,fields) =>{
            res.send(result)
        })
    })
});

app.get('/light/:epoch', (req, res) => {

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    console.log(epoch);


    let con = mysql.createConnection({
        host: "localhost",
        user: "isen",
        password: "isen123",
        database: "isen"
    });

    con.connect((err) =>{
        if (err) throw err;
        con.query(`SELECT * FROM Light where timestamp >= ${epoch} and timestamp <= ${endEpoch}`, (err,result,fields) =>{
            res.send(result)
        })
    })
});

app.get('/temperature/:epoch', (req, res) =>{

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    let con = mysql.createConnection({
        host: "localhost",
        user: "isen",
        password: "isen123",
        database: "isen"
    });

    con.connect((err) =>{
        if (err) throw err;
        con.query(`SELECT * FROM Temperature where timestamp >= ${epoch} and timestamp <= ${endEpoch}`, (err,result,fields) =>{
            res.send(result)
        })
    })
});

app.get('/sound/:epoch', (req, res) =>{

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    let con = mysql.createConnection({
        host: "localhost",
        user: "isen",
        password: "isen123",
        database: "isen"
    });

    con.connect((err) =>{
        if (err) throw err;
        con.query(`SELECT * FROM Sound where timestamp >= ${epoch} and timestamp <= ${endEpoch}`, (err,result,fields) =>{
            console.log(result);
            res.send(result)
        })
    })
});

app.get('/vocalization/:epoch', (req, res) =>{

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    let con = mysql.createConnection({
        host: "localhost",
        user: "isen",
        password: "isen123",
        database: "isen"
    });

    con.connect((err) =>{
        if (err) throw err;
        con.query(`SELECT * FROM Vocalization where timestamp >= ${epoch} and timestamp <= ${endEpoch}`, (err,result,fields) =>{
            console.log(result);
            res.send(result)
        })
    })
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
module.exports = app;
