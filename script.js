const allChildren = document.querySelectorAll("div > div ");
const wrDiv = document.querySelector("#wrapper");
const wrDivChildren = document.querySelector("#wrapper").children;

function start(howMany) {
    for (let n = 0; n <= howMany; n++) {
        const para = document.createElement("div");
        para.setAttribute("style", `color:blue;`)
        wrDiv.appendChild(para);
        
    }
    for (let i = 0; i < wrDiv.childElementCount; i++) {
        wrDivChildren.item(i).innerHTML = `${i}`
    }
}
















// const startDate = document.querySelector("#first");
// const endDate = document.querySelector("#second");
// const calculate = document.querySelector("#third");
// const result = document.querySelector("#result")


// startDate.addEventListener("click", newStyle);
// endDate.addEventListener("click", newStyleTwo);
// calculate.addEventListener("click", showResultWindow)

// function newStyle() {
//     endDate.classList.add("endclass");
//     }
// function newStyleTwo() {
//     calculate.classList.add("calculateClass");
// }
// function showResultWindow() {
//     result.classList.add("resultClass");
//    }
// function newStyleTwo() {
//     result.classList.add("resultClass");
//     test.innerHTML = "You clicked ENDDATE";
//     }    
