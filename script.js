let ticTocToe=document.querySelector(".game_1");
let snake=document.querySelector(".game_2");
let flipFlop=document.querySelector(".game_3");

ticTocToe.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","box_container");
    
    //console.log(boxtoe);
    document.body.appendChild(boxtoe);
    handleBoxContainer();    
});
function handleBoxContainer(){
    let selectBox=document.querySelector(".box_container");
    let crossArea=document.createElement("div");
    crossArea.setAttribute("class","cross");
    crossArea.style.height="40px";
    crossArea.innerHTML=`<i class="fas fa-times"ICON></i></div>`;
    selectBox.appendChild(crossArea);
    selectBox=document.querySelector(".box_container");
    let crossBtn=document.querySelector(".fa-times");

    crossBtn.addEventListener("click",function(){
        selectBox=document.querySelector(".box_container");
    console.log(selectBox);
    while(selectBox.firstChild){
        selectBox.removeChild(selectBox.firstChild);
    }
    selectBox.remove("box_container");
    console.log(selectBox);
    })
}




snake.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","box_container");
    
    document.body.appendChild(boxtoe);
    handleBoxContainer();
});
flipFlop.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","box_container");
    
    console.log(boxtoe.style);
    document.body.appendChild(boxtoe);
    handleBoxContainer();
});
