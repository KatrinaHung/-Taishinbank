/*--------------------- Nav ------------------*/

function closeMenu(){
  $('.nav-icon2').removeClass('open');
  //$('#wrapper').removeClass('toggled');
 
}

$(document).ready(function(){
  
  var wdth=$(window).width();

  $(window).resize(function() {
    console.log("wdth2:"+wdth);
     closeMenu();
     $('#wrapper').removeClass('toggled');
     
});

// default close-laptop
closeMenu();

	$('#nav-icon2').click(function(){
    $(this).toggleClass('open');
	}); 
});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(".list-group-item").hover(
  function () {
    $(this).addClass("active");
  }, 
  function () {
    $(this).removeClass("active");
  }
);
/*--------------------- Timer ------------------*/
const fourthOfJuly =  new Date("2019/06/02 14:30:00").getTime();
// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent=days
  document.getElementById("hours").textContent=hours
  document.getElementById("minutes").textContent=minutes
  document.getElementById("seconds").textContent=seconds
   

}, 1000);


/*--------------------- Show fixed vote panel------------------*/
window.onload = function(){
  
  //close nav
  var wdth=$(window).width();
  console.log('laprtop');
  if(wdth>=768){
    $('#wrapper').addClass('toggled');
    console.log('wdth:'+wdth);
  }else{
    $('#wrapper').removeClass('toggled');
    console.log('mobile');
  }

  document.onmousewheel = function(e){
  //console.log(window.pageYOffset);

  if(window.pageYOffset>200){
    showFixedVote();
  }
  else{
    hideFixedVote();
  }
  }
  }

  function showFixedVote(){
    $(".shareButton").css("position","fixed"); 
    $(".vote").toggleClass('navbar-fixed-bottom');
    $(".vote").css("position","fixed"); 
  }

  function hideFixedVote(){
    $(".vote").css("position","relative"); 
    $(".vote").toggleClass('navbar-fixed-bottom');
  }

  /*--------------------- Show more News ------------------*/

  $(".arrowCircle").click(function() {
   
    $(".newsList").toggleClass('open');
  });

  

$(".newsList a").hover(
  function () {
    $(this).css("color","#bc2d2d");
  },function(){
  $(this).css("color","#6f6155");
}
);

$(".latestNews a").hover(
  function () {
    $(this).css("color","#bc2d2d");
  },function(){
  $(this).css("color","#6f6155");
}
);