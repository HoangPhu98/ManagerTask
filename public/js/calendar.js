
    today = new Date();
    curMonth = today.getMonth();
    curYear = today.getFullYear();
    displayCalendarBody(curMonth, curYear);

    month = document.getElementById("calendar-month");
    year = document.getElementById("calendar-year");
    month.firstElementChild.onclick = preMonth;
    month.lastElementChild.onclick = nextMonth;
    year.firstElementChild.onclick = preYear;
    year.lastElementChild.onclick = nextYear;


function preMonth() {
    curYear = (curMonth === 0) ? curYear - 1 : curYear;
    curMonth = (curMonth === 0) ? 11 : curMonth - 1;
    displayCalendarBody(curMonth, curYear);
}

function nextMonth() {
    curYear = (curMonth === 11) ? curYear + 1 : curYear;
    curMonth = (curMonth + 1) % 12;
    displayCalendarBody(curMonth, curYear);
}

function preYear() {
    curYear--;
    displayCalendarBody(curMonth, curYear);
}

function nextYear() {
    curYear++;
    displayCalendarBody(curMonth, curYear);
}

// Hien thi lich voi thang va nam 
function displayCalendarBody(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    if (firstDay === 0) firstDay = 7;

    let calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    document.getElementById("month").innerText = "Tháng " + (month + 1) ;
    document.getElementById("year").innerText = "Năm " + year;
    let date = 1; // Dem so ngay trong 1 thang
    let isBreak = false;
    for(let i = 0; i < 6; i ++) {
        let row = document.createElement("tr");
        for(let j = 0; j < 7; j ++) {
            let cell = document.createElement("td");
            let span = document.createElement("span");
            let cellText;
            if ((i === 0 && j < firstDay - 1) || (date > daysInMonth)) {
                cellText = document.createTextNode("");
                cell.classList.add("empty-cell");
                isBreak = true;
            } else {
                cellText = document.createTextNode(date);
                if (date === today.getDate()
                    && year === today.getFullYear()
                    && month === today.getMonth()) cell.classList.add("today");
                date++;
            }
            span.appendChild(cellText);
            cell.appendChild(span);
            row.appendChild(cell);
            if (date === daysInMonth) isBreak = true;
        }
        calendarBody.appendChild(row);
        if (i === 4 && isBreak && date > daysInMonth) break;
    }   
}
