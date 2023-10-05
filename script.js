let tabContent = document.getElementById("aboutTab");
let tabVisit = document.getElementById("timeToVisitTab");
let tabAttraction = document.getElementById("attractionsTab");

let btn1 = document.getElementById("aboutButton");
let btn2 = document.getElementById("timeToVisitButton");
let btn3 = document.getElementById("attractionsButton");

tabVisit.classList.add("d-none");
tabAttraction.classList.add("d-none");

function about(){
    tabContent.classList.remove("d-none");
    tabVisit.classList.add("d-none");
    tabAttraction.classList.add("d-none");

    btn1.classList.add("selected-button");
    btn2.classList.remove("selected-button");
    btn3.classList.remove("selected-button");
}

function timeToVisit(){
    tabContent.classList.add("d-none");
    tabVisit.classList.remove("d-none");
    tabAttraction.classList.add("d-none");

    btn1.classList.remove("selected-button");
    btn2.classList.add("selected-button");
    btn3.classList.remove("selected-button");
}

function attraction(){
    tabContent.classList.add("d-none");
    tabVisit.classList.add("d-none");
    tabAttraction.classList.remove("d-none");

    btn1.classList.remove("selected-button");
    btn2.classList.remove("selected-button");
    btn3.classList.add("selected-button");
}



