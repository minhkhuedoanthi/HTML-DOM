
//myscroll
var mybutton = document.getElementById("top");
window.onscroll = function(){scroll()};
function scroll(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      mybutton.style.display = "block";
  }
  else{
    mybutton.style.display = "none";
  }
}
function scrollToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop=0;
}
//resize
let w = window.outerWidth;
let h = window.outerHeight;
let text =  w + "x" + h;
document.getElementById("screenSize").innerHTML = text;
function resize(){
  let w = window.outerWidth;
  let h = window.outerHeight;
  let text =  w + "x" + h;
  document.getElementById("screenSize").innerHTML = text;
}
//
//darkmode
function colorMode() {
  let y = document.getElementById("myDivID").style.color;
  console.log(y);
  let myDivObj = document.getElementById("myDivID");
  let myDivObjBgColor = window.getComputedStyle(myDivObj).color;
  console.log(typeof myDivObjBgColor);
  if( myDivObjBgColor == `rgb(173, 216, 230)` ){
    document.getElementById("light").href = "../css/darkmode.css";
  }
  // `${y}`
  else {
    document.getElementById("light").href = "../css/responsive_navbar_dropdown.css";
  }
}
//responsive navbar
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//scroll to section
function scrollSection01(){
  let y = document.getElementById("01");
  y.scrollIntoView();
}
function scrollSection02(){
  let y = document.getElementById("02");
  y.scrollIntoView();
}
function scrollSection03(){
  let y = document.getElementById("03");
  y.scrollIntoView();
}
function scrollSection04(){
  let y = document.getElementById("04");
  y.scrollIntoView();
}
