let arrowImg;
let lowerReturnButton;
let tabScroll;
let tabs
let addToneElem
let count = 0;
let genre;
let options;
let confirmTxt;

function init(){
    lowerReturnButton = document.querySelector("#lower-return-button")
    arrowImg = document.querySelector("#arrow")
    tabScroll = document.querySelector("#tab")
    tabs = document.querySelectorAll("#tab div")
    hearts = document.querySelectorAll(".heart")
    addToneElem = document.querySelector("#add-tone")
    addButton = document.querySelectorAll(".add-button")
    mainContent = document.querySelector("#main-content")
    searchHeader = document.querySelector("#search-header")
    tabHeader = document.querySelector("#tab-header")
    phoneFrame = document.querySelector("#phone-frame")
    followBtn = document.querySelector("#follow-btn")
    footer = document.querySelector("#footer")
    returnBtn = document.querySelector("#return-btn")
    genreField = document.querySelector("#genre-field")
    select = document.querySelector("#select")
    cancelBtn = document.querySelector("#cancel-btn")
    okBtn = document.querySelector("#ok-btn")
    options = document.querySelectorAll("#select > fieldset > div > label > input")
    confirmBtn = document.querySelector("#confirm-btn")
    confirmTxt = document.querySelector("#confirm-text")


    tabs[0].style.backgroundColor = "#E01F22"
    tabs[0].style.border = "1px solid #FFF"
    tabs[0].firstElementChild.style.color = "#FFF"

    tabScroll.addEventListener("scroll", arrow)
    followBtn.addEventListener("click", followUnfollow)
    returnBtn.addEventListener("click", returnStep)
    genreField.addEventListener("click", chooseGenre)
    cancelBtn.addEventListener("click", closeChooseGenre)
    okBtn.addEventListener("click", closeChooseGenre)
    confirmBtn.addEventListener("click", confirmAdd)

    for (let i = 0; i < addButton.length; i++){
        addButton[i].addEventListener("click", addTone)
    }

    for (let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", selectedTab)
    }

    for (let i = 0; i < hearts.length; i++){
        hearts[i].addEventListener("click", followUnfollow)
    }

}
window.addEventListener("load", init)


function arrow(){
    if(tabScroll.scrollLeft === 0) {
        arrowImg.style.display ="unset"
    }

    else {
        arrowImg.style.display ="none"
    }
}


function selectedTab(){

    for (let i = 0; i < tabs.length; i++){
        if(tabs[i].style.backgroundColor = "#E01F22"){
            tabs[i].style.backgroundColor = "#1B1B1B"
            tabs[i].style.border = "1px solid black"
            tabs[i].lastElementChild.style.color = "#6A6A6A"
        }
    }

    this.style.backgroundColor = "#E01F22"
    this.style.border = "1px solid #FFF"
    this.lastElementChild.style.color = "#FFF"

}

function followUnfollow(){

    let element = this
    let backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');

    if (backgroundColor === "rgb(255, 255, 255)") {
        element.style.backgroundColor = "rgb(16, 16, 16)";
        element.textContent = "Following";
        element.style.border = "1px solid rgb(255, 255, 255)"; 
        element.style.color = "white";
        
    } else if (backgroundColor === "rgb(16, 16, 16)") {
        element.style.backgroundColor = "rgb(255, 255, 255)"; 
        element.textContent = "Follow";
        element.style.color = "rgb(224, 31, 34)"
    }
}


function addTone(){
    let input = document.querySelector("#input")
    let creator = document.querySelector("#creator-name")
    genre = document.querySelector("#genre")
    let ampPic = document.querySelector("#combo")

    addToneElem.style.visibility = "visible"
    addToneElem.style.marginBottom = "50px"
    mainContent.style.filter = "blur(3px)"
    searchHeader.style.filter = "blur(3px)"
    tabHeader.style.filter = "blur(3px)"
    phoneFrame.style.zIndex = "9"
    addToneElem.style.zIndex = "10"
    footer.style.zIndex = "11"


    let toneTitle = this.parentElement.parentElement.previousSibling.previousSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.textContent
    let toneCreator = this.parentElement.parentElement.previousSibling.previousSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.textContent
    let genreTitle = this.previousSibling.previousSibling.textContent
    let tonePic = this.parentElement.parentElement.previousSibling.previousSibling.firstElementChild.src
    console.log(tonePic)

    input.value = toneTitle
    creator.textContent = toneCreator
    genre.textContent = genreTitle
    ampPic.src = tonePic
}

function returnStep(){
    footer.style.zIndex = "10"
    phoneFrame.style.zIndex = "11"
    addToneElem.style.zIndex = "7"

    addToneElem.style.visibility = "invisible"
    addToneElem.style.marginBottom = "-300px"
    mainContent.style.filter = "none"
    searchHeader.style.filter = "none"
    tabHeader.style.filter = "none"
    addToneElem.style.transition = "0.75s"
    setTimeout(fixZIndex, 750)
}


function chooseGenre(){
    select.style.display = "grid"
    addToneElem.style.transition = "0s"
    addToneElem.style.filter = "blur(3px)"

    for (let i = 0; i < options.length; i++){
        if (genre.textContent == options[i].value){
            options[i].checked = true
        }
    }  
}


function closeChooseGenre(){
    select.style.display = "none"
    addToneElem.style.filter = "none"

    if (this.textContent == "CANCEL"){
        return
    }

    for (let i = 0; i < options.length; i++){
        if(options[i].checked){
            genre.textContent = options[i].parentElement.textContent
        }
    }    
}

function confirmAdd(){
    addToneElem.style.transition = "0.75s"

    let confirmTxt = document.querySelector("#confirm-text p")
    confirmTxt.textContent = input.value + " Has Been Added to " + genre.textContent + " Library"

    setTimeout(visible, 350)
    setTimeout(notVisible, 3250)
    returnStep()
}

function visible(){
    confirmTxt.style.visibility = "visible"
}

function notVisible(){
    confirmTxt.style.visibility = "hidden"
    phoneFrame.style.zIndex = "5"
}

 function fixZIndex(){
    phoneFrame.style.zIndex = "5"
 }