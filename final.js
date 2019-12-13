
function ready() {
  go.onclick = function() {
    let a = course1.value 
    let b = tiempo1.value
    // let e = course2.value
    // let f = tiempo2.value
    // let g = course3.value
    // let h = tiempo3.value
    // let i = course4.value
    // let j = tiempo4.value

    // var elem = document.getElementById('demo');
    // elem.parentNode.removeChild(elem);

    document.getElementById("demo").style.visibility = "hidden";

    clase.innerHTML = a;

    let x = 1;
    setTimeout(function(){
      let c = document.getElementById("demo" + x)
      let d = tiempo2.value
      clase.innerHTML = c;
      x = x +1;
    }, 1000);

  
  }


}

document.addEventListener("DOMContentLoaded", ready);