const buttons = document.querySelector("#wrapper").children;
const wrapper = document.querySelector("#wrapper");
const begin = document.querySelector("#begin");
const end = document.querySelector("#end");
const reload = document.querySelector("#rld");
const header = document.querySelector("header");
const exec = document.querySelector("#execute");
const result = document.querySelector("#result");
const bodyS = document.querySelector("body");
const main = document.querySelector("main");
const firstDayOfMonth = [0, 1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
exec.addEventListener("click", () => { resulting() });
reload.addEventListener("click", function () {location.reload()});
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


function resulting() {
    bodyS.classList.add("trans-body");
    result.setAttribute("style", "visibility:visible;")
    let final = [yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd];
    console.log(`${final}`)
    calc(final);
}
function calc(date) {
    let cStart = 0; let cEnd = 0; let cResult = 0;
    if (date[0] === date[3]) {
        cStart = firstDayOfMonth[date[1]] + date[2] - 1;
        console.log(`One: ${firstDayOfMonth[date[4]]}, Two ${date[5]} `)
        cEnd = firstDayOfMonth[date[4]] + date[5] - 1;
        cResult = (cEnd - cStart);
        console.log("IF....")
    }
    else {
        console.log(`${cStart, cEnd, cResult}`)
        console.log(`One: ${firstDayOfMonth[date[4]]}, Two ${date[5]} `)
        console.log(`y${date[0]},m${date[1]},d${date[2]},yt${date[3]},mt${date[4]},dt${date[5]}` + " "+ typeof date[4])
        cStart = 365 - firstDayOfMonth[date[1]] - date[2] + 1;
        cEnd = firstDayOfMonth[date[4]] + date[5] - 1;
        cResult = cStart + cEnd;
        console.log(`ELSE...${cResult}`)
    }
    result.innerHTML = `Between these dates <br /> has passed <br />
    <span style="color:red">${cResult}</span> day(s) <br /> <h6>Enter new date(s) and press "execute"
    to repeat</h6>`;
}
function getStartDate() {
    bodyS.classList.remove("trans-body");
    result.innerHTML = "";
    header.setAttribute("style", "visibility:hidden")
    begin.setAttribute("style", "visibility:hidden;")
    end.setAttribute("style", "visibility:hidden;")
    result.setAttribute("style", "visibility:hidden;")
    exec.setAttribute("style", "visibility:hidden;")
    for (let i = 2010; i < 2021; i++) {
        const paraYear = document.createElement("div");
        paraYear.innerHTML = `${i}`;
        document.querySelector("#wrapper").appendChild(paraYear);

    }
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener("click", function () { writeToYear(buttons.item(i).innerHTML) });
        
    }

    function writeToYear(inner) {
        yearStart = parseInt(inner);
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
        monthStart = Object.keys(monthNamesObj).indexOf(val)+1;
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
        dayStart = parseInt(val2);
        delChildren();
        begin.innerHTML = `<span>Start Date: ${dayStart}, ${monthStart}, ${yearStart}</span>`;
        begin.setAttribute("style", "visibility:visible;")
        end.setAttribute("style", "visibility:visible;")
        header.setAttribute("style", "visibility:visible")
        if (yearStart !== 0 && dayEnd !== 0) {
            exec.setAttribute("style", "visibility:visible;");
        }
    }
    
    function delChildren() {
        while (wrapper.firstChild) {
            wrapper.firstChild.remove()
        }
    }
}
function getEndDate() {
    bodyS.classList.remove("trans-body");
    result.innerHTML = "";
    end.setAttribute("style", "display:none;")
    exec.setAttribute("style", "visibility:hidden;")
    begin.setAttribute("style", "visibility:hidden;")
    header.setAttribute("style", "visibility:hidden")
    result.setAttribute("style", "visibility:hidden;")
    exec.setAttribute("style", "visibility:hidden;")
     for (let i = 2010; i < 2021; i++) {
        const paraYear = document.createElement("div");
        paraYear.innerHTML = `${i}`;
        document.querySelector("#wrapper").appendChild(paraYear);

    }
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener("click", function () { writeToYear(buttons.item(i).innerHTML) });
        
    }

    function writeToYear(inner) {
        yearEnd = parseInt(inner);
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
        monthEnd = Object.keys(monthNamesObj).indexOf(val) +1 ;
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
        dayEnd = parseInt(val2);
        delChildren();
        end.innerHTML = `<span>End Date: ${dayEnd}, ${monthEnd}, ${yearEnd}</span>`;
        end.setAttribute("style", "visibility:visible;")
        begin.setAttribute("style", "visibility:visible;")
        header.setAttribute("style", "visibility:visible")
        // exec.setAttribute("style", "visibility:visible;")
        if (yearStart !== 0 && dayEnd !== 0) {
            exec.setAttribute("style", "visibility:visible;");
        }
    }
    
    function delChildren() {
        while (wrapper.firstChild) {
            wrapper.firstChild.remove()
        }
    }
}        