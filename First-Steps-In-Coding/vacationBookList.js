function vacationBookList (numberOfPages, PagesPerHour, NumberOfDays) {
let totalHours = numberOfPages / PagesPerHour;
let hoursPerDay = totalHours / NumberOfDays;
console.log(hoursPerDay);
}
vacationBookList(212, 20, 2)