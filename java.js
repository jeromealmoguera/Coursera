function myFunction() {
    var x, text;
    
    x = document.getElementById("numb").value;
  
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Thank you!";
    }
    document.getElementById("demo").innerHTML = text;
  }