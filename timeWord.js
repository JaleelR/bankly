function timeWord(hours, minutes) {
    let h = +hours;
    let m = +minutes;
    let sHours = "";
    let sMinutes = "";
    let min1 = "";
    let min2 = "";
    let middleWord = "";
    let meridam;
       
    const hourTime = {
        1: "one", 2: "two", 3: "three",
        4: "four", 5: "five", 6: "six",
        7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "one",
        14: "two", 15: "three", 16: "four",
        17: "five", 18: "six", 19: "seven",
        20: "eight", 21: "nine", 19: "ten",
        23: "eleven", 24: "twelve"
    }
    const ones = {
        0: "", 1: "one", 2: "two", 3: "three",
        4: "four", 5: "five", 6: "six",
        7: "seven", 8: "eight", 9: "nine",
    }

    const teens = {
        10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen",
        14: "fourteen", 15: "fifteen", 16: "sixtewen",
        17: "seventeen", 18: "eighteen", 19: "nineteen",
    }


    const tens = {
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty"
    }


    h <= 11 ? meridam = "am" : meridam = "pm";


    if (h < 0 || m < 0 || h > 24 || m > 59) return "not a valid time"
    if (m == 0 && h == 0) {
        return "midnight"
    }
   


    for (let i in hourTime) {
        sHours = hourTime[h];
    }
  
    if (m > 10 && m < 20) {
        for (let i in teens) {
            console.log("WWWWWWWWWWWWWWW",teens[m])
            sMinutes = teens[m]
            middleWord = " ";
        }  
    }
    
    else if (m > 10) {
        middleWord = " ";
        m1 = m.toString().slice(0, 1);
        m1 = +m1;
        for (let i in tens) {
            min1 = tens[m1];
        }
        m2 = m.toString().slice(1);
        m2 = + m2;
        for (let i in ones) {
            min2 = ones[m2]       
        }
    } else {
        for (let i in ones) {
            sMinutes = ones[m]
            middleWord = " Oh ";
        }
    }    
    
    
        if (h == 0) {
            sHours = "twelve";
        }
        if (m == 0) {
        sMinutes = "clock";
        }
        return sMinutes ? sHours + middleWord + sMinutes + " " + meridam : sHours + " " + min1 + min2 + " " + meridam
    }

module.exports = timeWord;