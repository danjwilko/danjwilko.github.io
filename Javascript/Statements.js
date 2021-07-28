/* Each of lines in blue is a statement */
var today = newDate();
var hourNow = today.getHours();
var greeting;
/* curly braces indicate the start and the end of a code block*/

/* the purple code determines what will run */
if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good aftegnoon';
} else if (hourNow > 0) {
    greeting = 'Good morning'
} else {
    greeting = 'Welcome!'
}
document.write(greeting)