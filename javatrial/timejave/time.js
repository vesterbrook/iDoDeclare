var HOUR = 8;
var MINUTE = 50;
var PERIOD = "am";



if (MINUTE < 30 && PERIOD == "am") {
    console.log("It's almost " + (HOUR + 1 )  + " in the morning");
}

else if (MINUTE < 30 && PERIOD == "PM") {
    console.log("Its just after " + (HOUR ) + " in the evening");
}


else if (MINUTE >= 30 && PERIOD == "am") {
    console.log("It's almost " + (HOUR + 1 )  + " in the morning");
}


else if (MINUTE >= 30 + PERIOD =="PM") {
    console.log("Its just after " + (HOUR ) + " in the evening");
}

