function anifliptel(){
  var x=document.getElementById("fliptel");
  var c1='<div style="padding-top: 60%;"></div>';
  var par='<div class="flip-card animated fadeInUp" style="padding-top: 10px;" onmouseover="isactivefliptel();" onmouseout="isnotactivefliptel();"><div class="flip-card-inner"><div class="flip-card-front" style="padding-top: 30px;background-color: white;"><img src="schoollogo.png" alt="Somerville Scholl" style="width:300px;height:300px;"><p class="lead"style="padding-top: 10px font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141);">HIGHER SECON<span class="f">DARY EDUCATION</span></p></div><div class="flip-card-back" ><h1 class="display-9" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(218, 214, 214); text-align: center; background-color: darkorange; height: 15%; padding-top: 6px;">XII<sup>th</sup></h1><div class="container" style="padding-top: 50px; text-align: center;" ><div class="progress mx-auto"><span class="progress-left"><span class="progress-bar" id="tel-left" style="border-color: #0275d8;" ></span></span><span class="progress-right"><span class="progress-bar empty-flip" id="tel-right" style="border-color: #0275d8;"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold" style="color: rgb(88, 88, 88);">84</div></div></div><div class="row text-center mt-4"><div class="col-6 border-right"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2018</div></div><div class="col-6"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2019</div></div></div><p class="lead" style="color: rgb(143, 141, 141); font-size: x-small; text-align: right;">grading scale:- PERCENTAGE</p></div></div></div></div>';
    
  if(elementInViewport2(x) && x.innerHTML==c1){
    x.innerHTML=par;
  }
  if(!elementInViewport2(x)){
    x.innerHTML=c1;
  }
}
function aniflipten(){
  var x=document.getElementById("flipten");
  var c1='<div style="padding-top: 60%;"></div>';
  var par='<div class="flip-card animated fadeInUp" style="padding-top: 10px;" onmouseover="isactiveflipten();" onmouseout="isnotactiveflipten();"><div class="flip-card-inner"><div class="flip-card-front" style="padding-top: 30px;background-color: white;"><img src="schoollogo.png" alt="Somerville Scholl" style="width:300px;height:300px;"><p class="lead" style="padding-top: 10px ;font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); font-size: x-large;">SECONDARY<span class="f"> EDUCATION</span></p></div><div class="flip-card-back" ><h1 class="display-9" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(218, 214, 214); text-align: center; background-color: darkorange; height: 15%; padding-top: 6px;">X<sup>th</sup></h1><div class="container" style="padding-top: 50px; text-align: center;" ><div class="progress mx-auto"><span class="progress-left"><span class="progress-bar" id="ten-left" style="border-color: darkorange;"></span></span><span class="progress-right empty"><span class="progress-bar empty-flip" id="ten-right" style="border-color: darkorange;"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold" style="color: rgb(88, 88, 88);">9.6</div></div></div><div class="row text-center mt-4"><div class="col-6 border-right"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2016</div></div><div class="col-6"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2017</div></div></div><p class="lead" style="color: rgb(143, 141, 141); font-size: x-small; text-align: right;">grading scale:- CGPA</p></div></div></div></div>';
    
  if(elementInViewport2(x) && x.innerHTML==c1){
   x.innerHTML=par;
}
  if(!elementInViewport2(x)){
    x.innerHTML=c1;
  }

}
function aniflipbet(){
  var x=document.getElementById("flipbet");
  var c1='<div style="padding-top: 60%;"></div>';
  var par='<div class="flip-card animated fadeInUp" style="padding-top: 10px;"  onmouseover="isactiveflipbet();" onmouseout="isnotactiveflipbet();"><div class="flip-card-inner"><div class="flip-card-front" style="padding-top: 30px;background-color: white;"><img src="collagelogo.png" alt="Amrita university" style="width:300px;height:300px;"><p class="lead" style="padding-top: 10px ;font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); font-size: x-large;">GRADU<span class="f">ATION</span></p></div><div class="flip-card-back" ><h1 class="display-9" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(218, 214, 214); text-align: center; background-color: darkorange; height: 15%; padding-top: 6px;">Btech CSE</h1><div class="container" style="padding-top: 50px; text-align: center;" ><div class="progress mx-auto"><span class="progress-left"><span class="progress-bar" id="bet-left" style="border-color: #5cb85c;" ></span></span><span class="progress-right"><span class="progress-bar empty-flip" id="bet-right" style="border-color: #5cb85c;"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold" style="color: rgb(88, 88, 88);">9.41</div></div></div><div class="row text-center mt-4"><div class="col-6 border-right"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2019</div></div><div class="col-6"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2023</div></div></div><p class="lead" style="color: rgb(143, 141, 141); font-size: x-small; text-align: right;">grading scale:- CGPA</p></div></div>';
  if(elementInViewport2(x) && x.innerHTML==c1){
   x.innerHTML=par;
}
  if(!elementInViewport2(x)){
    x.innerHTML=c1;
  }

}
function appearintro1(){
  var x=document.getElementById("intro1");
  var par=x.innerHTML;
  var c1='<h3 class="display-4 " style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); text-align: center; padding-top: 2%;">ABOUT <span class="f">ME</span></h3>';
  var c2='<div style="padding-top: 50%;"></div>';
  
  if(elementInViewport2(x) && x.innerHTML==c1+c2){
    var p='<div class="row" ><div class="col-lg-4 col-md-6 col-sm-6"  style="padding-top: 5%;"><img src="coimg.jpg" class="rounded-circle mx-auto d-block animated fadeInLeft" height="100%" width="100%" style="max-height: 400px; max-width: 400px; min-height: 350px; min-width: 320px;"></div><div class="col-lg-8 col-md-6 col-sm-6 animated fadeInRight"><h1 class="display-4" style="color: rgb(143, 141, 141); padding-right: 98%;"><span class="fa fa-quote-left"></span></h1><h1 class="display-7" style="padding-top: 50px; padding-left:30px ; padding-right: 20px; text-align: center; color: rgb(143, 141, 141);">I am an avid competitive <span class="f">programmer and web developer.</span></h1><h1 class="display-4" style="color: orangered; padding-top: 50px; padding-left: 98%;"><span class="fa fa-quote-right"></span></h1></div></div>';
    x.innerHTML=c1+p;
  }

  if(!elementInViewport2(x)){
    x.innerHTML=c1+c2;
  }

}
function appearintro2(){
  var x=document.getElementById("intro2");
  var par=x.innerHTML;
  var c2='<div style="padding-top: 1%;"></div>';
  
  if(elementInViewport2(x) && x.innerHTML==c2){
    var p='<div class="row"><div class="col-lg-8 col-md-6 col-sm-6 animated fadeInLeft" style="padding-top: 3%;"><h1 class="display-4" style="color: rgb(143, 141, 141); padding-bottom: 5%;"><span class="fa fa-quote-left"></span></h1><h1 class="display-7" style=" text-align: center; color: rgb(143, 141, 141);">I am also a stock <span class="f">market enthusiast.</span></h1><h1 class="display-4" style="color: orangered; padding-top: 5%; padding-left: 96%;"><span class="fa fa-quote-right"></span></h1></div><div class="col-lg-4 col-md-6 col-sm-6" style="padding-top: 5%;"><img src="bvsb.jpg" class="rounded-circle mx-auto d-block animated fadeInRight" height="100%" width="100%" style="max-height: 400px; max-width: 400px; min-height: 350px; min-width: 290px;" ></div></div>';
     x.innerHTML=p;
  }

  if(!elementInViewport2(x)){
    x.innerHTML=c2;
  }

}
function isactive(){
  
  var x=document.getElementById("html-progress");
  var hr=document.getElementById("html-right");
  var hl=document.getElementById("html-left");
  if(elementInViewport2(x) && !hr.className.includes("ht") && !hl.className.includes("pt")){
    hr.className=hr.className.replace(" empty"," ht");
    hl.className+=" pt";
    

     
  }
  if(!elementInViewport2(x)) {
    hr.className=hr.className.replace(" ht"," empty");
    hl.className=hl.className.replace(" pt","");
    


  }
  var cssx=document.getElementById("css-progress");
  var csshr=document.getElementById("css-right");
  var csshl=document.getElementById("css-left");
  if(elementInViewport2(cssx) && !csshr.className.includes("ht") && !csshl.className.includes("css-pt")){
    csshr.className=csshr.className.replace(" empty"," ht");
    csshl.className+=" css-pt";
    

     
  }
  if(!elementInViewport2(cssx)) {
    csshr.className=csshr.className.replace(" ht"," empty");
    csshl.className=csshl.className.replace(" css-pt","");
    


  }
  var jsx=document.getElementById("js-progress");
  var jshr=document.getElementById("js-right");
  var jshl=document.getElementById("js-left");
  if(elementInViewport2(jsx) && !jshr.className.includes("ht") && !jshl.className.includes("js-pt")){
    jshr.className=csshr.className.replace(" empty"," ht");
    jshl.className+=" js-pt";
    

     
  }
  if(!elementInViewport2(jsx)) {
    jshr.className=jshr.className.replace(" ht"," empty");
    jshl.className=jshl.className.replace(" js-pt","");
    


  }
  var cx=document.getElementById("c-progress");
  var chr=document.getElementById("c-right");
  var chl=document.getElementById("c-left");
  if(elementInViewport2(cx) && !chr.className.includes("ht") && !chl.className.includes("c-pt")){
    chr.className=chr.className.replace(" empty"," ht");
    chl.className+=" c-pt";
    

     
  }
  if(!elementInViewport2(cx)) {
    chr.className=chr.className.replace(" ht"," empty");
    chl.className=chl.className.replace(" c-pt","");
    


  }

}
function isactiveflipten(){
  var tenleft=document.getElementById("ten-left");
  var tenright=document.getElementById("ten-right");
  if(tenright.className.includes("empty-flip")){
    tenright.className=tenright.className.replace(" empty-flip"," htgr");
  }
  if(!tenleft.className.includes("ten-pt")){
    tenleft.className+=" ten-pt";
  }

}
function isnotactiveflipten(){
  var tenleft=document.getElementById("ten-left");
  var tenright=document.getElementById("ten-right");
  if(tenright.className.includes("htgr")){
    tenright.className=tenright.className.replace(" htgr"," empty-flip");
  }
  if(tenleft.className.includes("ten-pt")){
    tenleft.className=tenleft.className.replace(" ten-pt","");
  }

}
function isactivefliptel(){
  var telleft=document.getElementById("tel-left");
  var telright=document.getElementById("tel-right");
  if(telright.className.includes("empty-flip")){
    telright.className=telright.className.replace(" empty-flip"," htgr");
  }
  if(!telleft.className.includes("tel-pt")){
    telleft.className+=" tel-pt";
  }

}
function isnotactivefliptel(){
  var telleft=document.getElementById("tel-left");
  var telright=document.getElementById("tel-right");
  if(telright.className.includes("htgr")){
    telright.className=telright.className.replace(" htgr"," empty-flip");
  }
  if(telleft.className.includes("tel-pt")){
    telleft.className=telleft.className.replace(" tel-pt","");
  }

}
function isactiveflipbet(){
  var betleft=document.getElementById("bet-left");
  var betright=document.getElementById("bet-right");
  if(betright.className.includes("empty-flip")){
    betright.className=betright.className.replace(" empty-flip"," htgr");
  }
  if(!betleft.className.includes("bet-pt")){
    betleft.className+=" bet-pt";
  }

}
function isnotactiveflipbet(){
  var betleft=document.getElementById("bet-left");
  var betright=document.getElementById("bet-right");
  if(betright.className.includes("htgr")){
    betright.className=betright.className.replace(" htgr"," empty-flip");
  }
  if(betleft.className.includes("bet-pt")){
    betleft.className=betleft.className.replace(" bet-pt","");
  }

}

function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
