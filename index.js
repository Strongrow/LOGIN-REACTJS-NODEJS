const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"test"

});


app.post('/login', (res, req) => {
    const usuario = req.body.username;
    const PASSw = req.body.password;

    db.query(
        "Select * from usertest WHERE usuario = ? and PASSw = ?",
        [usuario, PASSw],
        (err, result) => {

            if (err){
                res.send({err: err})
            } 
            if (result) {
                res.send(result)
            } else {
                res.send({message:"usuario no encontrado"})
                }
            
            
        }
    );
});

app.listen(3001,() =>{
    console.log("running server");
} ) 