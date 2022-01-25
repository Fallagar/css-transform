const startDate = document.querySelector("#first");
const endDate = document.querySelector("#second");
const calculate = document.querySelector("#third");
const start = document.querySelector("#start")
const result = document.querySelector("#result")


start.addEventListener("click", rmStart);
startDate.addEventListener("click", showEnd)
endDate.addEventListener("click", showCalc);
calculate.addEventListener("click", showResult)

function rmStart() {
    start.classList.add("start");
    startDate.classList.add("first");
    }
function showEnd() {
    endDate.classList.add("second");
}
function showCalc() {
    calculate.classList.add("third");
}
   function showResult() {
    result.classList.add("result");
}
// // function newStyleTwo() {
// //     result.classList.add("resultClass");
// //     test.innerHTML = "You clicked ENDDATE";
// //     }    

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
// // function newStyleTwo() {
// //     result.classList.add("resultClass");
// //     test.innerHTML = "You clicked ENDDATE";
// //     }    
