<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link id = "light" rel="stylesheet" href="../css/responsive_navbar_dropdown.css">


<style>

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
