const buttons = document.querySelector("#wrapper").children;
const wrapper = document.querySelector("#wrapper");
const monthNamesObj = {
    "January": 31, "February": 28, "March": 31, "April": 30, "May": 31, "June": 30,
    "July": 31, "August": 31, "September": 30, "October": 31, "November": 30, "December": 31
}
const monthNames = Object.keys(monthNamesObj);
var year = 0;
var month = 0;
var day = 0;
function getStartDate() {
    for (let i = 2010; i < 2021; i++) {
        const paraYear = document.createElement("div");
        paraYear.innerHTML = `${i}`;
        document.querySelector("#wrapper").appendChild(paraYear);

    }
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener("click", function () { writeToYear(buttons.item(i).innerHTML) });
        
    }

    function writeToYear(inner) {
        year = inner;
        while (wrapper.firstChild) {
            wrapper.firstChild.remove()
        }
        for (let i = 0; i < 12; i++) {
            const paraMonth = document.createElement("div");
            paraMonth.innerHTML = `${monthNames[i]}`;
            document.querySelector("#wrapper").appendChild(paraMonth);
        }
        for (let i = 0; i < 12; i++) {
            buttons.item(i).addEventListener("click", function () { writeToMonth(buttons.item(i).innerHTML) });
            
        }
    }
    function writeToMonth(value) {
        month = value;
        while (wrapper.firstChild) {
            wrapper.firstChild.remove()
        }
        console.log(`I am here, value is ${value},  Object is - ${monthNamesObj}`);
        for (let i = 1; i <= monthNamesObj.valueOf(value); i++) {
            const paraDay = document.createElement("div");
            paraDay.innerHTML = `${i}`;
            document.querySelector("#wrapper").appendChild(paraDay);
        }
        console.log("And HERE");
    }
}    