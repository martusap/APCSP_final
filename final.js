
function ready() {
  go.onclick = function() {
    let a = course.value 
    // let b = tiempo1.value
    // let e = course2.value
    // let f = tiempo2.value
    // let g = course3.value
    // let h = tiempo3.value
    // let i = course4.value
    // let j = tiempo4.value

    document.getElementById("demo").style.visibility = "hidden";

    clase.innerHTML = a;

    let x = 1;
    setTimeout(function(){
      let a = document.getElementById("course1").value
      console.log(a)
      // let b = tiempo2.value
      clase.innerHTML = a;
      x = x +1;
    }, 1000);

    clase.innerHTML = a;
   
  
  }


}

document.addEventListener("DOMContentLoaded", ready);




































// <body>
//     <div>Registration closes in <span id="time">05:00</span> minutes!</div>
// </body>

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };