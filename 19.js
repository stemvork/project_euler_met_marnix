//January 1st is a Tuesday.
function getDaysInMonth(month, year = 0){
    let lengths = {
        1: 31,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }

    if(month == 2){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return 29;
            } else {
                return 28;
            }
        } else if(year % 4 === 0){
            console.log("leap year")
            return 29;
        } else {
            return 28;
        }
    } else {
        return lengths[month];
    }
}
let year = 1901;
let month = 1;
let date = 0; //nth day of the month
let dayOfWeek = 1; //0 = Monday, January 1st 1901 was on a Tuesday
let count = 0;
for(var i = 0; year <= 2000; i++){
    date++;
    if(date == getDaysInMonth(month, year)){
        month++;
        date = 0;
    }
    if(month == 13){
        year++;
        console.log(year);
        month = 1;
    }
    
    dayOfWeek++;
    dayOfWeek %= 7;
    if(date == 0 && dayOfWeek == 6){
        count++;
    }
}

console.log(dayOfWeek);
console.log(date, month, year);
console.log(count);