const bodyparser = require('body-parser')
const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views","views");
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


//Rotas
app.get('/', (req,res) => {
   (async () => {
        const db = require("./db");
        const people = await db.selectPeopleNames();
        console.log(`Quantity of names: ${people.length}`);
        res.render('index', {people});
    })();
})

app.post('/', (req,res) => {
   (async () => {
        const db = require("./db");
        const response = await db.insertPeopleNames(req.body.name);
        console.log(`ID name inserted: ${express.response}`);
        const people = await db.selectPeopleNames();
        console.log(`Quantity of names: ${people.length}`);
        res.render('index', {people});
    })();
})

app.listen(port, () =>{
    console.log('Rodando na porta '+port)
})