

//connextion avec le server
const socket=io();
const input = document.getElementById("msgInput");
const sendBtn = document.getElementById("envoiBtn")
const msgSpace =document.getElementById("messageSpace")
//code pour cree une fonction verfier si l'utilisatuer
//  a ecrit une message et cliké sur le button ,ensuit afficher le message
 sendBtn.addEventListener('click',()=>{
    //veriable qui obtunier le valeur de input
    const message = input.value;
    //verfier si il y a valeur dans le input,et afficher le message
    if(message !==''){
        socket.emit('chat message', message);
    //pour suprimer le valeur qui dans le input apres l'envoier
    input.value="";
    } 
 });
    socket.on('chat message',(message)=>{
        //cree un elment div
        const div=document.createElement('div');
        //donner le div le style de message
        div.classList.add('msgRcu');
        div.textContent=message;
        msgSpace.appendChild(div);
        msgSpace.scrollTop=msgSpace.scrollHeight

    });
 