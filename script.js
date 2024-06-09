let boxes=document.querySelectorAll(".box")
let resebtn=document.querySelector(".reset")
let msg=document.querySelector("#msg")
let newbtn=document.querySelector(".newgame")
 let turn0=true;
 const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,3],
 ];
 const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const resetgame=()=>{
    turn0=true;
    enableboxes()
    msg.innerText = "Winner ??..";
 }
 boxes.forEach((box)=>{
    box.addEventListener("click",(event)=>{
        event.preventDefault();
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        
    })
 })
 const showwinner=(winner)=>{
    msg.innerText=`CONGO !!... so the winner is ${winner}`
    disableboxes()
 }
 const checkwinner=()=>{
    for(let patterns of winpatterns){
        let posval1=boxes[patterns[0]].innerText;
        let posval2=boxes[patterns[1]].innerText;
        let posval3=boxes[patterns[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3 && posval1===posval3){
                showwinner(posval1)
                
            }
        }

    }
 }
 newbtn.addEventListener("click",resetgame)
 resebtn.addEventListener("click",resetgame)

