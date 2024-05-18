let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    }else if (e.target.innerHTML == '%') {
      const num = parseFloat(string);
      if (!isNaN(num)) {
          // Calculate the percentage (divide by 100)
          string = (num / 100).toString();
      } else {
          string = 'Error';
      }
      document.querySelector('input').value = string;
  } 
    
    else if (e.target.innerHTML == "Del") {
      // Delete the nummber one-by-one
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "√") {
      // Calculate the square root
      string = Math.sqrt(parseFloat(string)).toString();
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
