/*--------------------- Nav ------------------*/
function closeMenu() {
  $('#wrapper').removeClass('toggled');
  $('#nav-icon2').removeClass('open');
}

function openmenu() {
  $('#wrapper').addClass('toggled');
  $('#nav-icon2').addClass('open');
}

//reload page when resize screen
$(window).resize(function(){location.reload();});

$(document).ready(function () {

  var wdth = $(window).width();

  // default close NAV
  closeMenu();


  //footer
  $('.single_feature').click(function () {
    $(this).toggleClass('laptopOpen');
  });


  //click burger
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
    $('#nav-icon2').toggleClass('open');
    //$('#menu-toggle').toggleClass('open');
    $('.navbar').toggleClass('open');
  });
});
$(".list-group-item").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);
$(".artWork_item").hover(function(){
  $(".artWork_item p").css("color","#bc2d2d")
  $(".artwork_hr").css("border-color","#bc2d2d")
  
},function(){
  $(".artWork_item p").css("color","#6f6155")
  $(".artwork_hr").css("border-color","#6f6155")
})
// change submenu red border
$(".colLeft").click(function(){
  $(".colLeft").css("border-color","#D8D8D8");
  $(this).css("border-color","#bc2d2d");
})
/*--------------------- Timer ------------------*/
const fourthOfJuly = new Date("2019/06/02 14:30:00").getTime();
// countdown
let timer = setInterval(function () {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
  document.getElementById("hours").textContent = hours
  document.getElementById("minutes").textContent = minutes
  document.getElementById("seconds").textContent = seconds


}, 1000);


/*--------------------- Show fixed vote panel------------------*/
window.onload = function () {

  //close nav

  var wdth = $(window).width();
  console.log('wdth:' + wdth);

  if (wdth >= 768) {
    $('#wrapper').addClass('toggled');

    console.log('laptop');
  } else {
    // $('#wrapper').removeClass('toggled');
    closeMenu();
    console.log('mobile');
  }





  document.onmousewheel = function (e) {
    //console.log(window.pageYOffset);

    if (window.pageYOffset > 200) {
      showFixedVote();
    } else {
      hideFixedVote();
    }
  }
}

function showFixedVote() {
  $(".shareButton").css("position", "fixed");
  $(".vote").toggleClass('navbar-fixed-bottom');
  $(".vote").css("position", "fixed");
}

function hideFixedVote() {
  $(".vote").css("position", "relative");
  $(".vote").toggleClass('navbar-fixed-bottom');
}

/*--------------------- Scroll screen ------------------*/

$(".lookDown").click(function () {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $('.newsTop').offset().top - 80
  }, 500);
});

/*--------------------- Show more News ------------------*/
$(".arrowCircle").click(function () {

  $(".newsList").toggleClass('open');
  $('.arrowCircle').toggleClass('circleActive');
  $('.arrow').toggleClass('arrowActive');
});


$(".newsList a").hover(
  function () {
    $(this).css("color", "#bc2d2d");
  },
  function () {
    $(this).css("color", "#6f6155");
  }
);

$(".latestNews a").hover(
  function () {
    $(this).css("color", "#bc2d2d");
  },
  function () {
    $(this).css("color", "#6f6155");
  }
);