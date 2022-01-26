const buttons = document.querySelector("#wrapper").children;
const wrapper = document.querySelector("#wrapper");
const begin = document.querySelector("#begin");
const end = document.querySelector("#end");
begin.addEventListener("click", function () { getStartDate() });
end.addEventListener("click", function () { getEndDate() });
const monthNamesObj = {
    "Jan": 31, "Feb": 28, "Mar": 31, "April": 30, "May": 31, "Jun": 30,
    "Jul": 31, "Aug": 31, "Sep": 30, "Oct": 31, "Nov": 30, "Dec": 31
}
const monthNames = Object.keys(monthNamesObj);
var yearStart = 0;
var monthStart = 0;
var dayStart = 0;
var yearEnd = 0;
var monthEnd = 0;
var dayEnd = 0;



function getStartDate() {
    begin.setAttribute("style", "visibility:hidden;")
    end.setAttribute("style", "visibility:hidden;")
    for (let i = 2010; i < 2021; i++) {
        const paraYear = document.createElement("div");
        paraYear.innerHTML = `${i}`;
        document.querySelector("#wrapper").appendChild(paraYear);

    }
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener("click", function () { writeToYear(buttons.item(i).innerHTML) });
        
    }

    function writeToYear(inner) {
        yearStart = inner;
        delChildren();
        for (let i = 0; i < 12; i++) {
            const paraMonth = document.createElement("div");
            paraMonth.innerHTML = `${monthNames[i]}`;
            document.querySelector("#wrapper").appendChild(paraMonth);
        }
        for (let i = 0; i < 12; i++) {
            buttons.item(i).addEventListener("click", function () { writeToMonth(buttons.item(i).innerHTML) });
            
        }
    }
    function writeToMonth(val) {
        var countDays = 0;
        monthStart = val;
        delChildren();       
        console.log(`I am here, value is ${val},  Object is - ${monthNamesObj[val]}`);
        for (let i = 1; i <= monthNamesObj[val]; i++) {
            const paraDay = document.createElement("div");
            paraDay.innerHTML = `${i}`;
            document.querySelector("#wrapper").appendChild(paraDay);
            countDays++;
        }
        console.log(`Count days is: ${countDays}`)
        for (let i = 0; i < countDays; i++) {
            // buttons.item(i).innerHTML +="*";
            // console.log(`${buttons.item(i).innerHTML}, length of buttons is ${buttons.length}`)
            // alert(`I is ${i}`);
            buttons.item(i).addEventListener("click", function () { writeToDay(buttons.item(i).innerHTML) });
        //     console.log(`Added EL to ${i} children`)
        }
        countDays = 0;
    }
    function writeToDay(val2) {
        dayStart = val2;
        delChildren();
        begin.innerHTML = `Start Date: ${dayStart}, ${monthStart}, ${yearStart}`;
        begin.setAttribute("style", "visibility:visible;")
        end.setAttribute("style", "visibility:visible;")
        
    }
    
    function delChildren() {
        while (wrapper.firstChild) {
            wrapper.firstChild.remove()
        }
    }
}
function getEndDate() {
    end.setAttribute("style", "visibility:hidden;")
    begin.setAttribute("style", "visibility:hidden;")
    for (let i = 2010; i < 2021; i++) {
        const paraYear = document.createElement("div");
        paraYear.innerHTML = `${i}`;
        document.querySelector("#wrapper").appendChild(paraYear);

    }
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener("click", function () { writeToYear(buttons.item(i).innerHTML) });
        
    }

    function writeToYear(inner) {
        yearEnd = inner;
        delChildren();
        for (let i = 0; i < 12; i++) {
            const paraMonth = document.createElement("div");
            paraMonth.innerHTML = `${monthNames[i]}`;
            document.querySelector("#wrapper").appendChild(paraMonth);
        }
        for (let i = 0; i < 12; i++) {
            buttons.item(i).addEventListener("click", function () { writeToMonth(buttons.item(i).innerHTML) });
            
        }
    }
    function writeToMonth(val) {
        var countDays = 0;
        monthEnd = val;
        delChildren();       
        console.log(`I am here, value is ${val},  Object is - ${monthNamesObj[val]}`);
        for (let i = 1; i <= monthNamesObj[val]; i++) {
            const paraDay = document.createElement("div");
            paraDay.innerHTML = `${i}`;
            document.querySelector("#wrapper").appendChild(paraDay);
            countDays++;
        }
        console.log(`Count days is: ${countDays}`)
        for (let i = 0; i < countDays; i++) {
            // buttons.item(i).innerHTML +="*";
            // console.log(`${buttons.item(i).innerHTML}, length of buttons is ${buttons.length}`)
            // alert(`I is ${i}`);
            buttons.item(i).addEventListener("click", function () { writeToDay(buttons.item(i).innerHTML) });
        //     console.log(`Added EL to ${i} children`)
        }
        countDays = 0;
    }
    function writeToDay(val2) {
        dayEnd = val2;
        delChildren();
        end.innerHTML = `End Date: ${dayEnd}, ${monthEnd}, ${yearEnd}`;
        end.setAttribute("style", "visibility:visible;")
        begin.setAttribute("style", "visibility:visible;")
        if (yearStart !== 0 && dayEnd !== 0) {
    
}
    }
    
    function delChildren() {
        while (wrapper.firstChild) {
            wrapper.firstChild.remove()
        }
    }
}        