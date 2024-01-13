document.getElementById("button").addEventListener("click", calAge);

function calAge() {
    let d = document.getElementById("day").value;
    let m = document.getElementById("month").value;
    let y = document.getElementById("year").value;
    let ok = 1;
    if (d === "") {
        ok = 0;
        document.getElementById("day_warning").innerHTML = "This field is required";
        change("day", 0);
    } else {
        change("day", 1);
    }
    if (m === "") {
        ok = 0;
        document.getElementById("month_warning").innerHTML = "This field is required";
        change("month", 0);
    } else change("month", 1);
    if (y === "") {
        ok = 0;
        document.getElementById("year_warning").innerHTML = "This field is required";
        change("year", 0);
    } else change("year", 1);

    if (!ok) return;

    let now = new Date();

    if (isNaN(Number(d)) || d <= 0 || d > 31) {
        ok = 0;
        document.getElementById("day_warning").innerHTML = "Must be a valid day";
        change("day", 0);
    } else {
        change("day", 1);
    }
    if (isNaN(Number(m)) || m <= 0 || m > 12) {
        ok = 0;
        document.getElementById("month_warning").innerHTML = "Must be a valid month";
        change("month", 0);
    } else change("month", 1);
    if (isNaN(Number(y)) || y <= 0) {
        ok = 0;
        document.getElementById("year_warning").innerHTML = "Must be a valid year";
        change("year", 0);
    } else if (y > now.getFullYear()) {
        ok = 0;
        document.getElementById("year_warning").innerHTML = "Must be in the past";
        change("year", 0);
    } else change("year", 1);

    if (!ok) return;

    let inputDate = new Date(m+"/"+d+"/"+y);
    let gap = Math.floor((now.getTime()-inputDate.getTime()) / (1000 * 3600 * 24));

    let ansYear = Math.floor(gap/365);
    gap -= 365*ansYear;
    let ansMonth = Math.floor(gap/31) % 12;
    gap -= 31*ansMonth;
    let ansDay = gap;

    console.log(ansDay);
    console.log(ansMonth);
    console.log(ansYear);

    document.getElementById("ansDay").innerHTML = ansDay;
    document.getElementById("ansMonth").innerHTML = ansMonth;
    document.getElementById("ansYear").innerHTML = ansYear;
}

function change(id, i) {
    if (i == 0) {
        document.getElementById(id+"_warning").style.height = "fit-content";
        document.getElementById(id).style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById(id+"_title").style.color = "hsl(0, 100%, 67%)";
    } else {
        document.getElementById(id+"_warning").style.height = "0";
        document.getElementById(id).style.borderColor = "hsl(0, 0%, 86%)";
        document.getElementById(id+"_title").style.color = "hsl(0, 1%, 44%)";
    }
}

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

console.log(isDateValid(new Date("2023/2/32")));