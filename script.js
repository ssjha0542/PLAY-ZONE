let ticTocToe=document.querySelector(".game_1");
let snake=document.querySelector(".game_2");
let flipFlop=document.querySelector(".game_3");
let countX=0;
let countO=0;
let playerXWin=0;
var tiles_flipped=0;
let player0Win=0;
var count=1;
var memory_values=[];
var memory_tile_ids = [];
let score=0;
var memory_array=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
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
    //console.log(selectBox);
    /******make the tic tac toe scores initially zero again*********/
    countX=0;
    countO=0;
    
    /************************************************************ */
    while(selectBox.firstChild){
        selectBox.removeChild(selectBox.firstChild);
    }
    selectBox.remove("box_container");
   
    //console.log(selectBox);
    }) 
}
function createSections(){
    /************Main Area Section Creation*******************/
    let boxContainer=document.querySelector(".box_container");
    let MainArea=document.createElement("div");
    MainArea.setAttribute("class","main_area");
    boxContainer.appendChild(MainArea);
    /*************Game Area Section Creation****************/
    let gameArea=document.createElement("div");
    gameArea.setAttribute("class","game_area_toe");
    MainArea.appendChild(gameArea);
    /*************Score Area Section Creation**************/
    let scoreArea=document.createElement("div");
    scoreArea.setAttribute("class","score_area");
    MainArea.appendChild(scoreArea);
    /****Your Score Area Section creation *********/
    let yourScoreArea=document.createElement("div");
    yourScoreArea.setAttribute("class","your_score_area");
    yourScoreArea.innerHTML=`PLAYER X SCORE ${countX}`;
    scoreArea.appendChild(yourScoreArea);
    /**************computer score area section creation*********************/
    let computerScoreArea=document.createElement("div");
    computerScoreArea.setAttribute("class","computer_score_area");
    scoreArea.appendChild(computerScoreArea);
    computerScoreArea.innerHTML=`PLAYER O SCORE  ${countO}`;
    /**************high score area section creation*******************************/
    /*let highScoreArea=document.createElement("div");
    highScoreArea.setAttribute("class","high_score_area");
    scoreArea.appendChild(highScoreArea);
    highScoreArea.innerHTML=`HIGH SCORE AREA`;*/
}

function gameTicTacToe(){
    let gameArea=document.querySelector(".game_area_toe");
    let main=document.createElement("div");
    main.setAttribute("id","main");
    main.innerHTML=`<div id="div1" onclick="fill(this)"></div><div id="div2" onclick="fill(this)"></div><div id="div3" onclick="fill(this)"></div>
    <div id="div4" onclick="fill(this)"></div><div id="div5" onclick="fill(this)" onclick="fill(this)"></div><div id="div6" onclick="fill(this)"></div>
    <div id="div7" onclick="fill(this)"></div><div id="div8" onclick="fill(this)"></div><div id="div9" onclick="fill(this)"></div>  `
    gameArea.appendChild(main);
}

function fill(control) {
    
    if(count<=9 ){
        if(document.getElementById(control.id).innerHTML!=""){
            return;
        }
    if(count%2!=0){
        document.getElementById(control.id).innerHTML="X";
    }
    else{
        document.getElementById(control.id).innerHTML="0";
    }
    
    
    count++;
    
    if(checkWin()){
        if(playerXWin==1){
            alert("Player X is the Winner");
            playerXWin=0;
            countX+=1;
            //console.log(countX);
            let yourScoreArea=document.querySelector(".your_score_area");
            yourScoreArea.innerText=`PLAYER X SCORE ${countX}`;
        }
        if(player0Win==1){
            alert("Player O is the Winner");
            player0Win=0;
            countO+=1;
            let computerScoreArea=document.querySelector(".computer_score_area");
            computerScoreArea.innerText=`PLAYER O SCORE ${countO}`;
        }
        for(let i=1;i<=9;i++){
            document.getElementById("div"+i).innerHTML="";
        }
        count=1;
    }
    if(count==10){
        alert("Match Draw");
        for(let i=1;i<=9;i++){
            document.getElementById("div"+i).innerHTML="";
        }
        count=1;
    }
}
    else{

        alert("Match Draw");
        for(let i=1;i<=9;i++){
            document.getElementById("div"+i).innerHTML="";
        }
        count=1;
    }

}
function checkWin(){
    if(checkCondition('div1','div2','div3')||checkCondition('div1','div5','div9')||checkCondition('div1','div4','div7')||
    checkCondition('div3','div5','div7')||checkCondition('div4','div5','div6')||
    checkCondition('div7','div8','div9')|| checkCondition('div2','div5','div8')||
    checkCondition('div3','div6','div9')){
        return true;
    }
}
function checkCondition(div1,div2,div3){
    if(getData(div1)!=""&&getData(div2)!=""&& getData(div3)!="" && getData(div1)==getData(div2)
    && getData(div2)==getData(div3)){
        if(getData(div1)=="X"){
            playerXWin=1;
        }
        else{
            player0Win=1
        }
        
        return true;
    }
}
function getData(div){
    return document.getElementById(div).innerHTML;
}





ticTocToe.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","box_container");
    
    //console.log(boxtoe);
    document.body.appendChild(boxtoe);
    handleBoxContainer();  
    createSections();
    gameTicTacToe();
});
/***************************card game section creation************************/
function createSectionsCard(){
    /*******creating main area******************/
    let boxContainer=document.querySelector(".box_container");
    let MainArea=document.createElement("div");
    MainArea.setAttribute("class","main_area");
    boxContainer.appendChild(MainArea);
    let gameArea=document.createElement("div");
    gameArea.setAttribute("class","game_area_card");
    MainArea.appendChild(gameArea);
    /**********************creating section for memory board id*****************/
    let memoryBoard=document.createElement("div");
    memoryBoard.setAttribute("id","memory_board");
    gameArea.appendChild(memoryBoard);
    newBoard();

}

/************logic for card game *****/

function newBoard(){
    
    
    
    Array.prototype.memory_tile_shuffle = function(){
        var i = this.length, j, temp;
        while(--i > 0){
            j = Math.floor(Math.random() * (i+1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
    }
    tiles_flipped = 0;
	let output = '';
    memory_array.memory_tile_shuffle();
	for(let i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
    
    
}
function memoryFlipTile(tile,val){
    
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("You did it ..press any key to play again");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'lightgrey';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'lightgrey';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}

/*****************section creation for game area ***************/

snake.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","box_container");
    
    document.body.appendChild(boxtoe);
    handleBoxContainer();
    createSectionsSnake();
    
    handleSnakeGame();
});
flipFlop.addEventListener("click",function(){
    let boxtoe=document.createElement("div");
    boxtoe.setAttribute("class","box_container");
    
    document.body.appendChild(boxtoe);
    handleBoxContainer();
    createSectionsCard();
    newBoard();
    
});
function createSectionsSnake(){
    /************Main Area Section Creation*******************/
    let boxContainer=document.querySelector(".box_container");
    let MainArea=document.createElement("div");
    MainArea.setAttribute("class","main_area");
    boxContainer.appendChild(MainArea);
    /*************Game Area Section Creation****************/
    let gameArea=document.createElement("div");
    gameArea.setAttribute("class","game_area");
    MainArea.appendChild(gameArea);
    /*************Score Area Section Creation**************/
    let scoreArea=document.createElement("div");
    scoreArea.setAttribute("class","score_area");
    MainArea.appendChild(scoreArea);
    /****Your Score Area Section creation *********/
    let yourScoreArea=document.createElement("div");
    yourScoreArea.setAttribute("class","your_score_area");
    yourScoreArea.innerHTML=`SCORE ${score}`;
    scoreArea.appendChild(yourScoreArea);
    /**************computer score area section creation*********************/
    /*let computerScoreArea=document.createElement("div");
    computerScoreArea.setAttribute("class","computer_score_area");
    scoreArea.appendChild(computerScoreArea);
    computerScoreArea.innerHTML=`PLAYER O SCORE  ${countO}`;*/
    /**************high score area section creation*******************************/
    let highScoreArea=document.createElement("div");
    highScoreArea.setAttribute("class","high_score");
    scoreArea.appendChild(highScoreArea);
    highScoreArea.innerHTML=`HIGH SCORE 0`;
}
/***************logic for snake game****************/

function handleSnakeGame(){
    
    let gameArea=document.querySelector(".game_area");
    let board=document.createElement("div");
    board.setAttribute("class","board");
    gameArea.appendChild(board);
    snakeGameLogic();
}
function snakeGameLogic(){
    
    window.requestAnimationFrame(main);
    main(ctime);
}
let inputDir={x:0,y:0};
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}
food={x:6,y:7};
function isCollide(snake){
    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x&& snake[i].y===snake[0].y){
            return true;
        }
    }
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true;
    }
}

function gameEngine(){
    
    let highScoreAre=document.querySelector(".high_score");
    let hiscore=localStorage.getItem("hiscore");

   if(hiscore===null){
    hiscoreval=0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
    highScoreAre.innerHTML=`Score `+hiscore;
    }
    else{
    highScoreAre=document.querySelector(".high_score");
    hiscoreval=JSON.parse(hiscore);
    highScoreAre.innerHTML=`HIGH SCORE`+hiscore;
    }

     //snake and food updte

     let yourScoreArea=document.querySelector(".your_score_area");
     if(isCollide(snakeArr)){
         inputDir={x:0,y:0};
         alert("Game Over. Press key to play again");
         snakeArr=[{x:13,y:15}];
         yourScoreArea.innerHTML=`SCORE 0`;
         score=0;
         
     }
     ///////increament the score and regenerate the food
     
     if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        score+=1; 
        if(score>hiscoreval){
            hiscoreval=score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
        }
        else{
            hiscoreval=JSON.parse(hiscore);
            highScoreAre.innerHTML="HIGH SCORE"+hiscore;
        }
        yourScoreArea.innerHTML=`SCORE `+score
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x, y:snakeArr[0].y+inputDir.y});
         let a=2;
         let b=16;
         food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
     }
     //move the snake
     for(let i=snakeArr.length-2;i>=0;i--){
      const element=snakeArr[i];
      snakeArr[i+1]={...snakeArr[i]}
     }
     snakeArr[0].x+=inputDir.x;
     snakeArr[0].y+=inputDir.y;
     //display snake
     let board=document.querySelector(".board");
     board.innerHTML="";
     snakeArr.forEach((e,index)=>{
         snakeElement=document.createElement("div");
         snakeElement.style.gridRowStart=e.y;
         snakeElement.style.gridColumnStart=e.x;
         
         if(index==0){
            snakeElement.classList.add("head");
         }
         else{
            snakeElement.classList.add("snake");
         }
        
         
         board.appendChild(snakeElement);
     }) ;
     //display food
     foodElement=document.createElement("div");
         foodElement.style.gridRowStart=food.y;
         foodElement.style.gridColumnStart=food.x;
         foodElement.classList.add("food");
         board.appendChild(foodElement);
    //listen the keys
    window.addEventListener("keydown",e=>{
        inputDir={x:0,y:1};
        switch(e.key){
            case "ArrowUp":
                inputDir.x=0;
                inputDir.y=-1;
                break;
            case "ArrowDown":
                inputDir.x=0;
                inputDir.y=1;
                break;
            case "ArrowLeft":
                inputDir.x=-1;
                inputDir.y=-0;
                break;
            case "ArrowRight":
                inputDir.x=1;
                inputDir.y=0;
                break;
            default:
                break;
                    
        }
    })
}
