function reset() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}

function del(){
    var input = document.getElementById("result");
      input.value = input.value.substring(0, input.value.length - 1);
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

(function () {
    addDarkThemeListener();
    addLightThemeListener();
  })();
  
function addDarkThemeListener() {
    $("button.dark").click(function (event) {
      event.preventDefault();
      $("main").addClass("dark-theme");
    });
}
  
function addLightThemeListener() {
    $("button.light").click(function (event) {
      event.preventDefault();
      $("main").removeClass("dark-theme");
    });
}