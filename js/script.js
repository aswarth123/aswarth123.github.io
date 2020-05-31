var taskno=5;
var taskname='tau';
function remove_title(){
  var upcontent=document.getElementById("upcomingcont");
  var upcom =document.getElementsByClassName("task-upcoming").length;
  var curcontent=document.getElementById("currentcont");
  var curcom =document.getElementsByClassName("task-current").length;
  var upco=document.getElementById("upcoming");
  var task='<div class="col-12" id="notask"><img src="tasks.jpeg" style="padding-top:5%; padding-left: 40%;"><h1 class="text-center" style="padding-top:2%; color: darkorange;"><span style="color:rgb(143, 141, 141)">#NO_TAS</span>KS_LEFT</h1></div>';
  
  
  var uptitle='<h3 class="display-6" id="upcoming-title" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); padding-top: 5%; text-align: center;">UPCO<span class="f">MING...</span></h3>';
  var curtitle='<h3 class="display-6" id="current-title" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); padding-top: 5%; text-align: center;">CUR<span class="f">RENT</span></h3>';
  if(upcom==0 && upcontent.innerHTML.includes(uptitle)){
    upcontent.innerHTML=upcontent.innerHTML.replace(uptitle,"");
    
  }
  else if(upcom>0 && !(upcontent.innerHTML.includes(uptitle))){
    uptitle+=upcontent.innerHTML;
    upcontent.innerHTML=uptitle;
  }
  if(curcom==0 && curcontent.innerHTML.includes(curtitle)){
    curcontent.innerHTML=curcontent.innerHTML.replace(curtitle,"");
    
  }
  else if(curcom>0 && !(curcontent.innerHTML.includes(curtitle))){
    curtitle+=curcontent.innerHTML;
    curcontent.innerHTML=curtitle;
  }
  if(curcom==0 && upcom==0 && document.getElementById("notask")==null){
    upco.innerHTML=task;
}
else if((curcom>0 || upcom>0) && document.getElementById("notask")!=null){
  
  upco.removeChild(upco.childNodes[0]);


}
  
  

}
function addtask(){

  var ed=document.getElementById("medate").value;
  var edate=ed[8]+ed[9]+"/"+ed[5]+ed[6]+"/"+ed[2]+ed[3];
  var sd=document.getElementById("msdate").value;
  var sdate=sd[8]+sd[9]+"/"+sd[5]+sd[6]+"/"+sd[2]+sd[3];
  var title=document.getElementById("task-title").value;
  var taskdes=document.getElementById("mtextarea").value;
  if(ed=="" || sd=="" || title==""){
    alert("Some mandatory fields are missing");
    nullfields();
    return('');
  }
  if(datedifference(sdate,edate)<0){
    alert("invalid start date and end date");
    nullfields();
  }
  if(datecomparison(edate)>0){
    alert("The task is already completed");
    nullfields();
  }
  else{
    if(datecomparison(sdate)>0){
      var task=document.getElementById("current");
       var task1='<div class="col-12" onmouseenter="addicon('+"'"+taskname+taskno+"'"+','+"'"+taskdes+"'"+');" onmouseleave="removeicon('+"'"+taskname+taskno+"'"+','+"'"+taskdes+"'"+');remdes('+"'"+taskname+taskno+"'"+','+"'"+taskdes+"'"+');" style="padding-top: 1%;" ><div class="task-box task-current" id='+"'"+taskname+taskno+"'"+'><h3 class="task-title">'+title+'</h3><div style="padding-top: 20px; padding-left: 10%; padding-bottom: 10px;"><div class="progress" style="width: 90%;"><div class="progress-bar" role="progressbar" id="progress'+taskno+'" style="background-color: darkorange !important; width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div></div><div class="enddate" id="enddate'+taskno+'" style="float: right; padding-right: 5%; color: rgb(143, 141, 141)"><h5>'+edate+'</h5></div><div class="startdate" id="startdate'+taskno+'" style="padding-left: 6%; color: rgb(143, 141, 141)"><h5>'+sdate+'</h5></div><div id='+"'"+"taudescrip"+taskno+"'"+'></div></div></div>';
    }
    else{
      var task=document.getElementById("upcoming");
      var task1='<div class="col-12" onmouseenter="addicon('+"'"+taskname+taskno+"'"+','+"'"+taskdes+"'"+');" onmouseleave="removeicon('+"'"+taskname+taskno+"'"+','+"'"+taskdes+"'"+');remdes('+"'"+taskname+taskno+"'"+','+"'"+taskdes+"'"+');" style="padding-top: 1%;" ><div class="task-box task-upcoming" id='+"'"+taskname+taskno+"'"+'><h3 class="task-title">'+title+'</h3><div style="padding-top: 20px; padding-left: 10%; padding-bottom: 10px;"><div class="progress" style="width: 90%;"><div class="progress-bar" role="progressbar" id="progress'+taskno+'" style="background-color: darkorange !important; width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div></div><div class="enddate" id="enddate'+taskno+'" style="float: right; padding-right: 5%; color: rgb(143, 141, 141)"><h5>'+edate+'</h5></div><div class="startdate" id="startdate'+taskno+'" style="padding-left: 6%; color: rgb(143, 141, 141)"><h5>'+sdate+'</h5></div><div id='+"'"+"taudescrip"+taskno+"'"+'></div></div></div>';
    }
   
    task.innerHTML+=task1;
    
    var pro='progress'+taskno;
    window.addEventListener("mouseover", function() {taskprogress(pro);})
    nullfields();
    taskno+=1;
  }
}
function nullfields(){
  document.getElementById("medate").value=null;
    document.getElementById("msdate").value=null;
    document.getElementById("mtextarea").value=null;
    document.getElementById("task-title").value=null;
}
function addcross(){
  var task=document.getElementsByClassName("task-box");
  var app;
  for(i=0;i<task.length;i++){
    app='<div onclick="removeid('+"'"+task[i].id+"'"+')" style="float: right; margin: 10px"><i class="fa fa-times" aria-hidden="true"></i></div>'
    if(task[i].innerHTML.includes(app)){
      task[i].innerHTML=task[i].innerHTML.replace(app,"");
    }
    else{
    app+=task[i].innerHTML;
    task[i].innerHTML=app;
  }
  }
}
function removeid(id){
  document.getElementById(id).parentNode.remove();
  //var arg='progress'+id[id.length-1];
  document.body.removeEventListener("mouseover",taskprogress);
}
function taskprogress(id){
  var par=document.getElementById(id);
  
  var ed=document.getElementById('enddate'+id[id.length-1]);
  var sd=document.getElementById('startdate'+id[id.length-1]);
  if(ed!=null && sd!=null){
  var edate=ed.textContent;
  var sdate=sd.textContent;
  var total=datedifference(sdate,edate);
  var comp=datecomparison(sdate);
  
  var percent=(comp/total)*100;
  if(percent<0){
    percent=0;
  }
  par.style.width=percent.toString()+'%';
  if(percent<50){
    par.style.backgroundColor='darkorange';
  }
  if(percent>=50 && percent<75){
    par.style.backgroundColor='#e0e420ee';
  }
  if(percent>=75){
    par.style.backgroundColor='red';
  }
}

}
function datecomparison(sdate){
  var today=new Date();
  var start=[parseInt(sdate[0]+sdate[1]),parseInt(sdate[3]+sdate[4]),parseInt('20'+sdate[6]+sdate[7])];
  var comp=((12*(today.getFullYear()-start[2])+today.getMonth()+1-start[1]))*30+today.getDate()-start[0];
  return(comp);

}
function datedifference(sdate,edate){
   var start=[parseInt(sdate[0]+sdate[1]),parseInt(sdate[3]+sdate[4]),parseInt('20'+sdate[6]+sdate[7])];
  var end=[parseInt(edate[0]+edate[1]),parseInt(edate[3]+edate[4]),parseInt('20'+edate[6]+edate[7])];
  
  var difference=((12*(end[2]-start[2])+end[1]-start[1]))*30+end[0]-start[0];
  return(difference);
}
function addremdes(id,des){
  var x=document.getElementById(id);
  var p='<p class="text-justify" style="margin: 20px 60px 20px 60px; color: darkorange; font-weight: 600;">'+des+'</p>';
  if(x.innerHTML.includes(p)){
      x.innerHTML=x.innerHTML.replace(p,"");
      
    }
    else{
      x.innerHTML+=p;
    }
}
function remdes(id,des){
  var x=document.getElementById(id);
  var p='<p class="text-justify" style="margin: 20px 60px 20px 60px; color: darkorange; font-weight: 600;">'+des+'</p>';
  if(x.innerHTML.includes(p)){
      x.innerHTML=x.innerHTML.replace(p,"");
      
    }

}
function addicon(id,des){
  var par=document.getElementById(id);
  
  var cross='<div onclick="removeid('+"'"+id+"'"+')" style="float: right; margin: 10px"><i class="fa fa-times" aria-hidden="true"></i></div>'
  var app='<div onclick="addremdes('+"'"+"taudescrip"+id[id.length-1]+"'"+','+"'"+des+"'"+')" style="float:right; padding-right: 10px;"><i class="fa fa-bars" aria-hidden="true"></i></div>';
  if(!par.innerHTML.includes(app) && !par.innerHTML.includes(cross)){
    
    app+=par.innerHTML;
    par.innerHTML=app;
  }

}
function removeicon(id,des){
  var par=document.getElementById(id);
  
  var app='<div onclick="addremdes('+"'"+"taudescrip"+id[id.length-1]+"'"+','+"'"+des+"'"+')" style="float:right; padding-right: 10px;"><i class="fa fa-bars" aria-hidden="true"></i></div>';
  if(par.innerHTML.includes(app)){
    par.innerHTML=par.innerHTML.replace(app,"");
  }

}

function countscore(id,score,no){
  var x=document.getElementById(id);
  var p=document.getElementById(score);
  var z=p.textContent;
  var delay=1800/no;
  
  var i;
  if(elementInViewport2(x) && z==0){
    for(i=0;i<no;i++){
      setTimeout(function() {z++;
        p.textContent=z;
      },delay*i);
    }
  }
  if(!elementInViewport2(x)){
    p.textContent=0;
    z=0;
  }
}

function anifliptel(){
  var x=document.getElementById("fliptel");
  var c1='<div style="padding-top: 60%;"></div>';
  var par='<div class="flip-card animated fadeInUp" style="padding-top: 10px;" onmouseover="isactiveflip('+ "'tel-left'," +"'tel-right',"+"'tel-pt'"+');" onmouseout="isnotactiveflip('+ "'tel-left'," +"'tel-right',"+"'tel-pt'"+');"><div class="flip-card-inner"><div class="flip-card-front" style="padding-top: 30px;background-color: white;"><img src="schoollogo.png" alt="Somerville Scholl" style="width:300px;height:300px;"><p class="lead"style="padding-top: 10px font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141);">HIGHER SECON<span class="f">DARY EDUCATION</span></p></div><div class="flip-card-back" ><h1 class="display-9" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(218, 214, 214); text-align: center; background-color: darkorange; height: 15%; padding-top: 6px;">XII<sup>th</sup></h1><div class="container" style="padding-top: 50px; text-align: center;" ><div class="progress1 mx-auto"><span class="progress-left"><span class="progressbar" id="tel-left" style="border-color: #0275d8;" ></span></span><span class="progress-right"><span class="progressbar empty-flip" id="tel-right" style="border-color: #0275d8;"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold" style="color: rgb(88, 88, 88);">84</div></div></div><div class="row text-center mt-4"><div class="col-6 border-right"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2018</div></div><div class="col-6"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2019</div></div></div><p class="lead" style="color: rgb(143, 141, 141); font-size: x-small; text-align: right;">grading scale:- PERCENTAGE</p></div></div></div></div>';
    
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
  var par='<div class="flip-card animated fadeInUp" style="padding-top: 10px;" onmouseover="isactiveflip('+ "'ten-left'," +"'ten-right',"+"'ten-pt'"+');" onmouseout="isnotactiveflip('+ "'ten-left'," +"'ten-right',"+"'ten-pt'"+');"><div class="flip-card-inner"><div class="flip-card-front" style="padding-top: 30px;background-color: white;"><img src="schoollogo.png" alt="Somerville Scholl" style="width:300px;height:300px;"><p class="lead" style="padding-top: 10px ;font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); font-size: x-large;">SECONDARY<span class="f"> EDUCATION</span></p></div><div class="flip-card-back" ><h1 class="display-9" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(218, 214, 214); text-align: center; background-color: darkorange; height: 15%; padding-top: 6px;">X<sup>th</sup></h1><div class="container" style="padding-top: 50px; text-align: center;" ><div class="progress1 mx-auto"><span class="progress-left"><span class="progressbar" id="ten-left" style="border-color: darkorange;"></span></span><span class="progress-right empty"><span class="progressbar empty-flip" id="ten-right" style="border-color: darkorange;"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold" style="color: rgb(88, 88, 88);">9.6</div></div></div><div class="row text-center mt-4"><div class="col-6 border-right"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2016</div></div><div class="col-6"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2017</div></div></div><p class="lead" style="color: rgb(143, 141, 141); font-size: x-small; text-align: right;">grading scale:- CGPA</p></div></div></div></div>';
    
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
  var par='<div class="flip-card animated fadeInUp" style="padding-top: 10px;"  onmouseover="isactiveflip('+ "'bet-left'," +"'bet-right',"+"'bet-pt'"+');" onmouseout="isnotactiveflip('+ "'bet-left'," +"'bet-right',"+"'bet-pt'"+');"><div class="flip-card-inner"><div class="flip-card-front" style="padding-top: 30px;background-color: white;"><img src="collagelogo.png" alt="Amrita university" style="width:300px;height:300px;"><p class="lead" style="padding-top: 10px ;font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(143, 141, 141); font-size: x-large;">GRADU<span class="f">ATION</span></p></div><div class="flip-card-back" ><h1 class="display-9" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: rgb(218, 214, 214); text-align: center; background-color: darkorange; height: 15%; padding-top: 6px;">Btech CSE</h1><div class="container" style="padding-top: 50px; text-align: center;" ><div class="progress1 mx-auto"><span class="progress-left"><span class="progressbar" id="bet-left" style="border-color: #5cb85c;" ></span></span><span class="progress-right"><span class="progressbar empty-flip" id="bet-right" style="border-color: #5cb85c;"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold" style="color: rgb(88, 88, 88);">9.41</div></div></div><div class="row text-center mt-4"><div class="col-6 border-right"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2019</div></div><div class="col-6"><div class="h4 font-weight-bold mb-0" style="color: rgb(143, 141, 141);">2023</div></div></div><p class="lead" style="color: rgb(143, 141, 141); font-size: x-small; text-align: right;">grading scale:- CGPA</p></div></div>';
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
  var c2='<div style="padding-top: 20%;"></div>';
  
  if(elementInViewport2(x) && x.innerHTML==c2){
    var p='<div class="row"><div class="col-lg-8 col-md-6 col-sm-6 animated fadeInLeft" style="padding-top: 3%;"><h1 class="display-4" style="color: rgb(143, 141, 141); padding-bottom: 5%;"><span class="fa fa-quote-left"></span></h1><h1 class="display-7" style=" text-align: center; color: rgb(143, 141, 141);">I am also a stock <span class="f">market enthusiast.</span></h1><h1 class="display-4" style="color: orangered; padding-top: 5%; padding-left: 96%;"><span class="fa fa-quote-right"></span></h1></div><div class="col-lg-4 col-md-6 col-sm-6" style="padding-top: 5%;"><img src="bvsb.jpg" class="rounded-circle mx-auto d-block animated fadeInRight" height="100%" width="100%" style="max-height: 400px; max-width: 400px; min-height: 350px; min-width: 290px;" ></div></div>';
     x.innerHTML=p;
  }

  if(!elementInViewport2(x)){
    x.innerHTML=c2;
  }

}
function isactive(id,left,right,css){
  
  var x=document.getElementById(id);
  var hr=document.getElementById(right);
  var hl=document.getElementById(left);
  var cssspace=" "+css;
  if(elementInViewport2(x) && !hr.className.includes("ht") && !hl.className.includes(css)){
    hr.className=hr.className.replace(" empty"," ht");
    hl.className+=cssspace;
  }
  if(!elementInViewport2(x)) {
    hr.className=hr.className.replace(" ht"," empty");
    hl.className=hl.className.replace(cssspace,"");
    }


}
function isactiveflip(left,right,css){
  var tenleft=document.getElementById(left);
  var tenright=document.getElementById(right);
  var cssspace=" "+css;
  if(tenright.className.includes("empty-flip")){
    tenright.className=tenright.className.replace(" empty-flip"," htgr");
  }
  if(!tenleft.className.includes(css)){
    tenleft.className+=cssspace;
  }

}
function isnotactiveflip(left,right,css){
  var tenleft=document.getElementById(left);
  var tenright=document.getElementById(right);
  var cssspace=" "+css;
  if(tenright.className.includes("htgr")){
    tenright.className=tenright.className.replace(" htgr"," empty-flip");
  }
  if(tenleft.className.includes(cssspace)){
    tenleft.className=tenleft.className.replace(cssspace,"");
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
