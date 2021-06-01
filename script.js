let ticTocToe=document.querySelector(".game_1");
let snake=document.querySelector(".game_2");
let flipFlop=document.querySelector(".game_3");


ticTocToe.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","container");
    boxtoe.style.height= "calc( 100vh - ( 70px + 70px ) )";
    boxtoe.style.width= "calc( 100vw - ( 100px + 100px ) )";
    boxtoe.style.backgroundColor="grey";
    boxtoe.style.position="absolute";
    boxtoe.style.top="70px";
    boxtoe.style.left="100px";
    boxtoe.style.borderRadius="1rem";
    console.log(boxtoe.style);
    document.body.appendChild(boxtoe);
});
snake.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","container");
    boxtoe.style.height= "calc( 100vh - ( 70px + 70px ) )";
    boxtoe.style.width= "calc( 100vw - ( 100px + 100px ) )";
    boxtoe.style.backgroundColor="grey";
    boxtoe.style.position="absolute";
    boxtoe.style.top="70px";
    boxtoe.style.left="100px";
    boxtoe.style.borderRadius="1rem";
    
    console.log(boxtoe.style);
    document.body.appendChild(boxtoe);
});
flipFlop.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","container");
    boxtoe.style.height= "calc( 100vh - ( 70px + 70px ) )";
    boxtoe.style.width= "calc( 100vw - ( 100px + 100px ) )";
    boxtoe.style.backgroundColor="grey";
    boxtoe.style.position="absolute";
    boxtoe.style.top="70px";
    boxtoe.style.left="100px";
    boxtoe.style.borderRadius="1rem";
    console.log(boxtoe.style);
    document.body.appendChild(boxtoe);
});