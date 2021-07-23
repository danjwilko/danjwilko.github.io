window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1000|| document.documentElement.scrollTop > 2050) {
    document.getElementById("emphasis").className = "on-scroll";
  } else {
    document.getElementById("emphasis").className = "";
  }
}