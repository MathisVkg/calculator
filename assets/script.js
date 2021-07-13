
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
function numberButton() {
    let numberClick = event.target.innerText.toLowerCase();
    console.log(numberClick);
}
// document.getElementById("button1").addEventListener("click", () => {
//     console.log(document.getElementById("button1"));
// })
