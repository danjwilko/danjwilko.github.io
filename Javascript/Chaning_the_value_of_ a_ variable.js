var inStock;
var shipping;

inStock =  true;
shipping = false;

/*Some other script might go here and, as a result, the script might need to change the values */

inStock = false;
shiping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className =  shipping;