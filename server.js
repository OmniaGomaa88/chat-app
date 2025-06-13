const { Socket } = require('dgram');
const express = require('express'); //on utilise "express" pour creer un server web"
const http = require('http');//creer server http compatible avec socket.io
const { disconnect } = require('process');
const {server}= require ('socket.io');
const app = express(); //une instance de l'applecation express
//creer un server http à partir de app
const server = http.createServer(app)
const io = new Server(server)//server qui gere la communication en temps real

//on demande de express de servir tous les fichiers qui son dans le dossier public
app.use(express.static('public'));


//Quand un client se connecte au server ,represente ce client connecte
io.on('connection',(Socket)=>{
    console.log('un utilisature est connecté');
});

//Quand un client envoie un message .le server recoit ce message ,ensuite réémet 
// le message à tous les autre clients
Socket.on('chat message',(msg)=>{
    io.emite('chat message', msg);
});

//une message affiche quand le clinet ferme l'onglet ou quitte 

Socket.on('disconnect',()=>{
    console.log("un utilisateur s\'est deconnecte")
})

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`sever en cours d'execution sur http://localhost:$(PORT)`)
})
