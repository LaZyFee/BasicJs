/* Write a function findLeapYear() that will take the array
 [2023,2024,2025,2028,2030] as the input parameter and will check if
 each year is a leap year. If a year is a leap year insert that year in a
 new array, return the new array and print the result. */

function isLeapYear(year) {

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findLeapYear(years) {
    const leapYears = [];

    for (var i = 0; i < years.length; i++) {
        if (isLeapYear(years[i])) {
            leapYears.push(years[i]);
        }
    }

    return leapYears;
}


const yearsArray = [2023, 2024, 2025, 2028, 2030];
const leapYearsArray = findLeapYear(yearsArray);

console.log("Leap years:", leapYearsArray);
