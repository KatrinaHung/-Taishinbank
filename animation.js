/*--------------------- Nav ------------------*/

function closeMenu() {
  $('#wrapper').removeClass('toggled');
  $('#nav-icon2').removeClass('open');
  $('.navbar').removeClass('open');
}

function openmenu() {
  $('#wrapper').addClass('toggled');
  $('#nav-icon2').addClass('open');
  $('.navbar').removeClass('open');
}

//reload page when resize screen
/* $(window).resize(function () {
  location.reload();
});
*/

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

/*--------------------- Speech Date button click------------------*/

$(".dataBall_1").click(function (e) {
  e.preventDefault();
  $(".dataBall").css("background-color", "#f6f5f4")
  $(".dataBall p").css("color", "#bc2d2d")


  $(this).css("background-color", "#bc2d2d")
  $('p', this).css("color", "#f6f5f4");
});

$(".dataBall_2").click(function (e) {
  e.preventDefault();
  $(".dataBall").css("background-color", "#f6f5f4")
  $(".dataBall p").css("color", "#bc2d2d")


  $(this).css("background-color", "#bc2d2d")
  $('p', this).css("color", "#f6f5f4");
});

$(".dataBall_3").click(function (e) {
  e.preventDefault();
  $(".dataBall").css("background-color", "#f6f5f4")
  $(".dataBall p").css("color", "#bc2d2d")


  $(this).css("background-color", "#bc2d2d")
  $('p', this).css("color", "#f6f5f4");
});
$(".dataBall_4").click(function (e) {
  e.preventDefault();
  $(".dataBall").css("background-color", "#f6f5f4")
  $(".dataBall p").css("color", "#bc2d2d")


  $(this).css("background-color", "#bc2d2d")
  $('p', this).css("color", "#f6f5f4");
});
$(".dataBall_5").click(function (e) {
  e.preventDefault();
  $(".dataBall").css("background-color", "#f6f5f4")
  $(".dataBall p").css("color", "#bc2d2d")


  $(this).css("background-color", "#bc2d2d")
  $('p', this).css("color", "#f6f5f4");
});
/*--------------------- Artwork_out ------------------*/
$(".artWork_item").hover(function () {
  $('p', this).css("color", "#bc2d2d");
  $('.artwork_hr', this).css("border-color", "#bc2d2d")

  $('.artWorkPhoto', this).css("opacity", "0.2");
  $('.redBall', this).css("display", "block");
  $('.redBall', this).css("opacity", "1");

}, function () {
  $('p', this).css("color", "#6f6155");
  $(".artWork_item p", this).css("color", "#6f6155")
  $(".artwork_hr", this).css("border-color", "#6f6155")
  $('.artWorkPhoto', this).css("opacity", "1");
  $('.artWorkPhoto', this).css("opacity", "1");
  $('.redBall', this).css("display", "none");

})


// change submenu red border
$(".colLeft").click(function () {
  $(".colLeft").css("border-color", "#D8D8D8");
  $(this).css("border-color", "#bc2d2d");

})




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


  /*--------------------- Show fixed vote panel------------------*/
  document.onmousewheel = function (e) {
    console.log(window.pageYOffset);


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


/*--------------------- artwork out buttons ------------------*/
$(".artIntro_CircleButton1").click(function () {
  $(".artIntro_CircleButton").css("background-color", "#f6f5f4");
  $(".artIntro_CircleButton p").css("color", "#bc2d2d");
  

  $(this).css("background-color", "#bc2d2d");
  $('p', this).css("color", "#f6f5f4");
  $(".aboutArtBlock1").css("display","block");
  $(".aboutArtBlock2").css("display","none");
  $(".aboutArtBlock3").css("display","none");
});

$(".artIntro_CircleButton2").click(function () {
  $(".artIntro_CircleButton").css("background-color", "#f6f5f4");
  $('.artIntro_CircleButton p').css("color", "#bc2d2d");

  $(this).css("background-color", "#bc2d2d");
  $('p', this).css("color", "#f6f5f4");
  $(".aboutArtBlock1").css("display","none");
  $(".aboutArtBlock2").css("display","block");
  $(".aboutArtBlock3").css("display","none");
});

$(".artIntro_CircleButton3").click(function () {
  $(".artIntro_CircleButton").css("background-color", "#f6f5f4");
  $('.artIntro_CircleButton p').css("color", "#bc2d2d");

  $(this).css("background-color", "#bc2d2d");
  $('p', this).css("color", "#f6f5f4");

  $(".aboutArtBlock1").css("display","none");
  $(".aboutArtBlock2").css("display","none");
  $(".aboutArtBlock3").css("display","block");
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