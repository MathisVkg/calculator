
// for(var i = 1; i < 4; i++) {
//     let buttonFlex = document.createElement("div");
//     buttonFlex.setAttribute("class", "buttonFlex");
//     buttonFlex.setAttribute("id", "buttonFlex" + i);
//     document.getElementById("buttonAll").appendChild(buttonFlex);
// }
// for(var i = 1; i < 4; i++) {
//     let myButton = document.createElement("button");
//     myButton.setAttribute("id", "button" + i);
//     myButton.setAttribute("class", "buttonClass");
//     myButton.innerHTML = i;
//     document.getElementById("buttonFlex3").appendChild(myButton);
// }
// for(var i = 4; i < 7; i++) {
//     let myButton = document.createElement("button");
//     myButton.setAttribute("id", "button" + i);
//     myButton.setAttribute("class", "buttonClass");
//     myButton.innerHTML = i;
//     document.getElementById("buttonFlex2").appendChild(myButton);
// }
// for(var i = 7; i < 10; i++) {
//     let myButton = document.createElement("button");
//     myButton.setAttribute("id", "button" + i);
//     myButton.setAttribute("class", "buttonClass");
//     myButton.innerHTML = i;
//     document.getElementById("buttonFlex1").appendChild(myButton);
// }

const buttons =  document.querySelectorAll(".buttonClass")
buttons.forEach((btn) => {
    btn.addEventListener("click", numberButton)
    // console.log(buttons);
});
var stockNumberFirst = "";
var stockNumberSecond = "";
var signe = 0;
function numberButton() {
    let numberClick = event.target.innerText.toLowerCase();
    if(numberClick < 10) {
        document.getElementById("writeAnswer").innerHTML += numberClick;
        stockNumberFirst += numberClick;
    }
    if(numberClick === ".") {
        document.getElementById("writeAnswer").innerHTML += ".";
        stockNumberFirst += numberClick;
    }
    if(numberClick === "x") {
        stockNumberSecond = stockNumberFirst;
        stockNumberFirst = "";
        document.getElementById("writeAnswer").innerHTML += "x";
        signe += 1;
    }
    if(numberClick === "-") {
        stockNumberSecond = stockNumberFirst;
        stockNumberFirst = "";
        document.getElementById("writeAnswer").innerHTML += "-";
        signe += 2;
    }
    if(numberClick === "+") {
        stockNumberSecond = stockNumberFirst;
        stockNumberFirst = "";
        document.getElementById("writeAnswer").innerHTML += "+";
        signe += 3;
    }
    if(numberClick === "÷") {
        stockNumberSecond = stockNumberFirst;
        stockNumberFirst = "";
        document.getElementById("writeAnswer").innerHTML += "÷";
        signe += 4;
    }
    console.log(stockNumberFirst);
    console.log(stockNumberSecond);
}
document.getElementById("egalButtonRun").addEventListener("click", () => {
    if(signe === 1) {
        let answer = stockNumberFirst *= stockNumberSecond;
        document.getElementById("writeAnswer").innerHTML = answer;
    }
    if(signe === 2) {
        let answer = stockNumberSecond -= stockNumberFirst;
        document.getElementById("writeAnswer").innerHTML = answer;
    }
    if(signe === 3) {
        let answer = stockNumberSecond -= stockNumberFirst;
        document.getElementById("writeAnswer").innerHTML = answer;
    }
    if(signe === 4) {
        let answer = stockNumberSecond /= stockNumberFirst;
        document.getElementById("writeAnswer").innerHTML = answer;
    }
    console.log(answer)
})
