let boxes = document.querySelectorAll(".box") ;
let resetBtn = document.querySelector(".reset") ;

let turn0 = true ; // player0 playerX 

const winPattern = [
    [0 , 1 , 2] , 
    [0 , 3 , 6] , 
    [0 , 4 , 8] ,
    [1 , 4 , 7] ,
    [2 , 5 , 8] , 
    [2 , 4 , 6] ,
    [3 , 4 , 5] , 
    [6 , 7 , 8] 
] ;

const disable = ()=> {
    for(let box of boxes){
                box.disabled = true ; 
            }
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "" ;
        box.style.backgroundColor = " #dcd6f7c4 ";
    }
    turn0 = true ;
}


const checkWinner = () => {
    
    for(let pattern of winPattern){
        if( (boxes[pattern[0]].innerText == boxes[pattern[1]].innerText && boxes[pattern[1]].innerText == boxes[pattern[2]].innerText ) && (boxes[pattern[0]].innerText == "O" || boxes[pattern[0]].innerText == "X" )){

            boxes[pattern[0]].style.backgroundColor = "#C7B9F3" ;
            boxes[pattern[1]].style.backgroundColor = "#C7B9F3" ;
            boxes[pattern[2]].style.backgroundColor = "#C7B9F3" ;
            disable() ;
            return ;
        }
    }
}


boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked") ;
        if(turn0){
            if(box.innerText != "X" && box.innerText != "O"){
                box.innerText = "O" ;
                turn0 = !turn0 ;
                box.style.color = " #985F6F "
            }
            
        }
        else{
            if(box.innerText != "X" && box.innerText != "O"){
                box.innerText = "X" ;
                turn0 = !turn0 ;
                box.style.color = " #98805f "
            }
        }  
        
        checkWinner() ;


    })
} )

resetBtn.addEventListener("click" , () => {
    enable() ;
} ) ;
