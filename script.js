
let lowerReturnButton;
let count = 0;

function init(){
    lowerReturnButton = document.querySelector("#lower-return-button")
    lowerReturnButton.addEventListener("click", test)
    console.log(lowerReturnButton)
}
window.addEventListener("load", init)


function test(){
    count += 1 
    console.log(count)
    console.log("ues")
}