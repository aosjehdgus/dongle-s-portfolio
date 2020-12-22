window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("nav").style.padding =  "5px 0";
      document.querySelector("nav").style.backgroundColor = "black";


  } else {
    document.querySelector("nav").style.padding = "5px 0";
    document.querySelector("nav").style.backgroundColor = "white";

  }
}
