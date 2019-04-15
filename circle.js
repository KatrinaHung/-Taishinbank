x = 0

function countSecond() {
    x = x + 1
    console.log(x);
    setTimeout("countSecond( )", 1000);
    if (x % 5 == 0) {
        $(".questionCircle").css("opacity", "0")
        $(".questionCircle_1").css("opacity", "1")
    }
    if (x % 5 == 1) {
        $(".questionCircle").css("opacity", "0")
        $(".questionCircle_2").css("opacity", "1")
    }
    if (x % 5 == 2) {
        $(".questionCircle").css("opacity", "0")
        $(".questionCircle_3").css("opacity", "1")
    }
    if (x % 5 == 3) {
        $(".questionCircle").css("opacity", "0")
        $(".questionCircle_4").css("opacity", "1")
    }
    if (x % 5 == 4) {
        $(".questionCircle").css("opacity", "0")
        $(".questionCircle_5").css("opacity", "1")
    }

}


$(document).ready(function () {
    countSecond();
});