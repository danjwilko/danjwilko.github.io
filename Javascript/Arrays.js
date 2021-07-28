// An array is a special kind of variable, it doesnt just sotre one value, it stores a  list of values.


// first example is a array literal
var colors;
colors =['white','black','custom'];

var el = document.getElementById('colors');
el.textContent = colors[0];


// the second example is a array constructor.

var colors =  new Array('white',
'black',
'custom');

var el = document.getElementById('colors');
el.textContent = colors[0];

/* An array leteral is the preffered method over the array constructor */ 