const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3000;
const fs = require("fs");

const mysqlConfig = {
    host: "localhost",
    user: "isenUser",
    password: "isen123",
    database: "isen"
};

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/all',(req,res)=>{

    let con = mysql.createConnection(mysqlConfig);
    con.connect((err) =>{
        let results = [];
        if (err) throw err;
        let sql = `INSERT INTO Temperature SET ?`;
        let post = {timestamp: req.body.timestamp, value: req.body.temperature};

        con.query(sql,post, (err,result,fields) =>{
            if(err){
                throw err
            }
            results.push(result)
        });
        sql = `INSERT INTO Vocalization SET ?`;
        post = {timestamp: req.body.timestamp, count: req.body.outlierCount};

        con.query(sql,post, (err,result,fields) =>{
            if(err){
                throw err
            }
            results.push(result)
        });
        sql = `INSERT INTO Humidity SET ?`;
        post = {timestamp: req.body.timestamp, value: req.body.humidity};

        con.query(sql,post, (err,result,fields) =>{
            if(err){
                throw err
            }
            results.push(result)
        });
        res.send(results)

    })
});

app.get('/humidity/:epoch', (req, res) => {

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    let con = mysql.createConnection(mysqlConfig);

    con.connect((err) =>{
        if (err) throw err;
        con.query(`SELECT * FROM Vocalization where timestamp >= ${epoch} and timestamp <= ${endEpoch}`, (err,result,fields) =>{
            res.send(result)
        })
    })

});

app.get('/light/:epoch', (req, res) => {

    let epoch = parseInt(req.params["epoch"]);
    let endEpoch = epoch + 86400;

    console.log(epoch);


    let con = mysql.createConnection(mysqlConfig);

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

    let con = mysql.createConnection(mysqlConfig);

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

    let con = mysql.createConnection(mysqlConfig);

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

    let con = mysql.createConnection(mysqlConfig);

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
