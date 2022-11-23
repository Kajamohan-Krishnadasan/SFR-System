const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();
const  PORT = 3000;
app.use(cors());
app.use(express.json())

// Route to get all users
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM users", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one user
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM users WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the user
app.post('/api/create', (req,res)=> {

const name = req.body.name;
const email = req.body.email;
const password = req.body.password;


db.query("INSERT INTO users ( name, email, password, type, last_login, date_added, date_updated) VALUES ( ?, ?, ?, 'N', NULL, current_timestamp(), NULL)",[ name, email, password], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a users
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE users SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a users

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM users WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})