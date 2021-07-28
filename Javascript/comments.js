/*This script displays a greeting to the user based upon the current time.
It is an example from JavaScript andJ Query book */


var today = newDate();
var hourNow = today.getHours();
var greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good aftegnoon';
} else if (hourNow > 0) {
    greeting = 'Good morning'
} else {
    greeting = 'Welcome!'
}
document.write(greeting);