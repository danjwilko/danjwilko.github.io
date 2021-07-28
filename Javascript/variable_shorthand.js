//Declaring each variable seperatly.
var price = 5;
var quantity = 14;
var total = price * quantity;

// Declaring each variables on the first line.
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;


// Two variables are declared and assigned values on the first line, then one is delcared and assigned a value on the next line.
var price = 5, quantity = 14;
var total = price * quantity;


//Here a variable is used to hold a reference to an element in the html page, this allows you to work directly with the element stored
// in that variable. 
var el =document.getElementById('cost');
el.textContent = '$'+ total;



