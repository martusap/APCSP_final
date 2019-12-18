function ready() {
    // Code starts when the button is pressed and form is filled out
go.onclick = function() {
    // gets the input from the first class and time on the form
    let a = course.value;
    let b = tiempo.value;
    //   hides the form
    document.getElementById("demo").style.visibility = "hidden";
    // Places the variables on the screen
    clase.innerHTML = a;  
    tie.innerHTML = b;
    // should set the countdown timer
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
      if (b>0) {
        tie.innerHTML = b;
        b = b - 1;
      }
      else {
    // If b is 0 then it will set up the next homework assignment
        a = document.getElementById("course1").value
        b = document.getElementById("tiempo1").value
        clase.innerHTML = a;
        tie.innerHTML = b;
        // Tried to clear interval so it doesnt take 2 off of b everytime
        clearInterval(myVar);
        var myVarw = setInterval(nextTimer, 1000);
      }
    }

    function nextTimer() {
      // b = document.getElementById("tiempo1").value
      if (b>0) {
        tie.innerHTML = b;
        b = b - 1;
      }
      else {
        a = document.getElementById("cource2").value
        b = document.getElementById("tiempo2").value
        clase.innerHTML = a;
        tie.innerHTML = b;
        clearInterval(Myvarw);
        var myVara = setInterval(threeTimer, 1000);
      }
    }

    function threeTimer() {
      if (b>0) {
        tie.innerHTML = b;
        b = b - 1;
      }
      else {
        a = document.getElementById("course3").value
        b = document.getElementById("tiempo3").value
        clase.innerHTML = a;
        tie.innerHTML = b;
         clearInterval(myVara);
        var myVard = setInterval(fourTimer, 1000);
      }
    }

    function fourTimer() {
      if (b>0) {
        tie.innerHTML = b;
        b = b - 1;
      }
      else {
         clearInterval(myVard);
        // a = document.getElementById("course3").value
        // b = document.getElementById("tiempo3").value
        // clase.innerHTML = a;
        // tie.innerHTML = b;
        // setInterval(fourTimer, 1000);
        clase.innerHTML = "Congradulations you have finished your homework, take the rest of the night off";
        tie.innerHTML = "";

      }
    }

        // Now done with homework, a little congradulations message
}
}
    
   document.addEventListener("DOMContentLoaded", ready);    