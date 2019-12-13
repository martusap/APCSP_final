

function ready() {
  go.onclick = function() {
    let a = course.value 
    let b = tiempo.value
    let c = course1.value
    let d = tiempo1.value
    let e = course2.value
    let f = tiempo2.value
    let g = course3.value
    let h = tiempo3.value
    let i = course4.value
    let j = tiempo4.value

    var elem = document.getElementById('demo');
    elem.parentNode.removeChild(elem);

    clase.innerHTML = a;

  
  }


}

document.addEventListener("DOMContentLoaded", ready);