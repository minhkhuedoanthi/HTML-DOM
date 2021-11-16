<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link id = "light" rel="stylesheet" href="../css/responsive_navbar_dropdown.css">


<style>
@font-face { 
    font-family: headerfont;
    src:url(file:///E:/font/SFUFuturaLightOblique.TTF);
}
@font-face {
    font-family: titlefont;
    src:url(file:///E:/font/SFUFuturaBold.TTF);
}
@font-face {
    font-family: bigtextfont;
    src:url(file:///E:/font/SFUFuturaHeavy.TTF);
}
@font-face {
    font-family: textfont;
    src:url(file:///E:/font/SFUFuturaRegular.TTF);
}
.whitetext {
    font-size: 12px;
    font-family: textfont;
    color: white;
}
.text {
    font-family: textfont;
}
.bigtext {
    font-family: bigtextfont;
}
.Title {
    font-family: titlefont;
    font-size: 30px;
    font-weight: 20px;
    color: lightblue;
    text-align: center;
}
.Header {
    font-family:headerfont;
    font-size: 14px;
    color: white;
    text-align: center;
}
.topnav {
    width:100%;;
    font-family: bigtextfont;
    overflow: hidden;
    background-color:rgb(15, 88, 161);
 


 }
.topnav span {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 30px;
}
.topnav a {
    float: left;
    justify-content: space-around;
    color: lightblue;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
.topnav a:hover {
    background-color: #ddd;
    color: black;
}
.topnav a.active {
    background-color:midnightblue;
    color: lightblue;
} 
@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      width: 40px;
      float: right;
      display: block;
    }
    .hamicon{
        width: 100% ;
        float: right !important;
        display: block !important;
    }
}
@media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
    .topnav.responsive a.icon {
        position:absolute !important;
        right: 0;
        top: 0;
    }
}
.hamicon {
    display: none;
}
.box2 {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    align-items: flex-start;
    background-color:lightblue;
    justify-content: center !important;
    padding: 20px !important;
    align-items:center !important;
    font-family: textfont;
    color: black;
}
.image{
    width: 60vmin;
    padding: 30px;
}
.LightSwitch {
    float: right;
    margin-right: 20px;
    position: sticky;
    background-color: white;
    border:none;
    font-family: textfont;
    color: black;
    padding: 5px 10px;
    border-radius: 12px;
    display: inline-block;
    text-align: center;
    font-size: 15px;
}
.LightSwitch:hover {
    transition-duration: 0.4s;
    background-color:cornflowerblue; /* Green */
    border: none; /* viền của nút */
}
.scrollToTop{
    width: 40px;
    border-radius: 50%;
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 15px;
}
</style>
</head>

<body onresize="resize()">

<img onclick = "scrollToTop()" id = "top" class="scrollToTop" src = "file:///D:/0.%20illustrator/c%C3%A1c%20em%20y%C3%AAu%20%E1%BB%9F%20gen%20project/genproject/691751-200.png">
<div class = "topnav">
  <span class = "Title" id = "myDivID">NAVBAR</span>
  <span class = "Header" >Define your future</span>
  <br>
  <span class = "whitetext">Screen Size:</span>
  <span id = "screenSize" class = "whitetext"></span>
  <button onclick="colorMode()" class = "LightSwitch">Switch Mode</button>

</div>
<div class="topnav"  id="myTopnav">
  <a onclick="scrollSection01()"  href="#HOME" class="active">HOME</a>
  <a onclick="scrollSection02()"  href="#AboutUs" class="active">About Us</a>
  <a onclick="scrollSection03()"  href="#Customers" class="active">Customers</a>
  <a onclick="scrollSection04()"  href="#Download" class="active">Download</a>
  <!-- button for responsive-->
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <img class = "hamicon" src = "file:///D:/0.%20illustrator/c%C3%A1c%20em%20y%C3%AAu%20%E1%BB%9F%20gen%20project/genproject/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div class="box2" id = "01">
  <div>
    <h1>01 - HOME: Sed ne, dum huic obsequor, vobis molestus sim.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Bonum patria: miserum exilium. </p>
  </div>
  <div>
    <img class = "image" src="file:///D:/0.%20illustrator/c%C3%A1c%20em%20y%C3%AAu%20%E1%BB%9F%20gen%20project/genproject/245139170_321489903074872_330172308588580708_n.jpg" alt="picture">
  </div>
</div>

<div class="box2" id = "02">
  <div>
    <h1>02 - About Us: Sed ne, dum huic obsequor, vobis molestus sim.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Bonum patria: miserum exilium. </p>
  </div>
  <div>
    <img class = "image" src="file:///D:/0.%20illustrator/c%C3%A1c%20em%20y%C3%AAu%20%E1%BB%9F%20gen%20project/genproject/245139170_321489903074872_330172308588580708_n.jpg" alt="picture">
  </div>
</div>

<div class="box2" id = "03">
  <div>
    <h1>03 - Customers: Sed ne, dum huic obsequor, vobis molestus sim.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Bonum patria: miserum exilium. </p>
  </div>
  <div>
    <img class = "image" src="file:///D:/0.%20illustrator/c%C3%A1c%20em%20y%C3%AAu%20%E1%BB%9F%20gen%20project/genproject/245139170_321489903074872_330172308588580708_n.jpg" alt="picture">
  </div>
</div>

<div class="box2" id = "04">
  <div>
    <h1>04 - Download: Sed ne, dum huic obsequor, vobis molestus sim.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Bonum patria: miserum exilium. </p>
  </div>
  <div>
    <img class = "image" src="file:///D:/0.%20illustrator/c%C3%A1c%20em%20y%C3%AAu%20%E1%BB%9F%20gen%20project/genproject/245139170_321489903074872_330172308588580708_n.jpg" alt="picture">
  </div>
</div>




<script src="../js/event.js"></script>


</body>
</html>
