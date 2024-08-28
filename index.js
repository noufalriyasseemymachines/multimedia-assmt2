const gamehead=document.getElementById("gamehead");
const increaseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("reset");
const submitBtn=document.getElementById("submit-btn");
const rectangleBox=document.getElementById("rectangle-box");
const rectangleButton=document.getElementById("rectangle-button")
const nameHead=document.getElementById("name-head");
let name;
let count=0;

increaseBtn.onclick=function(){
    count++;
    gamehead.textContent=count;
    
}
decreaseBtn.onclick=function(){
    count--;
    gamehead.textContent=count;

}
resetBtn.onclick=function(){
    count=0;
    gamehead.textContent=0;
}

rectangleButton.onclick=function(){
    if (rectangleBox.style.fill=="black"){
        rectangleBox.style.fill="white"
    }
    else{
        rectangleBox.style.fill="black"
    }
}







