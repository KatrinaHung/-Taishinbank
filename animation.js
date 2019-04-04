
const fourthOfJuly =  new Date("2019/4/25 22:30:12").getTime();
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