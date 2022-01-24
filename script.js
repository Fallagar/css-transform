const startDate = document.querySelector("#first");
const endDate = document.querySelector("#second");
const calculate = document.querySelector("#third");
const result = document.querySelector("#result")


startDate.addEventListener("click", newStyle);
endDate.addEventListener("click", newStyleTwo);
calculate.addEventListener("click", showResultWindow)

function newStyle() {
    endDate.classList.add("endclass");
    }
function newStyleTwo() {
    calculate.classList.add("calculateClass");
}
function showResultWindow() {
    result.classList.add("resultClass");
   }
// function newStyleTwo() {
//     result.classList.add("resultClass");
//     test.innerHTML = "You clicked ENDDATE";
//     }    
