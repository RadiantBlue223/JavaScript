alert("Slap That OK Button");

var secondsInAMinute = 60;
var minutesInAHour = 60;
var hoursInADay = 24;
var daysInAYear = 365;
var secondsInAnHour = secondsInAMinute * minutesInAHour;
var secondsInADay = secondsInAnHour * hoursInADay;
var secondsInAYear = secondsInADay * daysInAYear;

document.writeln("The number of seconds in an hour is " + secondsInAnHour);
document.writeln("<br>");

document.writeln("The number of seconds in an day is " + secondsInADay);
document.writeln("<br>");

document.writeln("The number of seconds in an dyear is " + secondsInAYear);
document.writeln("<br>");
document.writeln("<br>");
document.writeln("created by Mike Landsberger")