(function () {
  defaultTheme();
  lightTheme();
  thirdTheme();
})();

function reset() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
  console.log(document.getElementById("result").value)
}

function del() {
  var input = document.getElementById("result");
  input.value = input.value.substring(0, input.value.length - 1);
}

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

function lightTheme() {
  document.getElementById("2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("2").classList.remove("transparent-button");
    document.getElementById("1").classList.remove("red-button");
    document.getElementById("3").classList.remove("red-button");
    document.querySelector("main").classList.add("light-theme");
    document.getElementById("2").classList.add("red-button");
    document.getElementById("1").classList.add("transparent-button");
    document.getElementById("3").classList.add("transparent-button");
    document.querySelector("main").classList.remove("third-theme");
  });
}

function defaultTheme() {
  document.getElementById("1").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("1").classList.remove("transparent-button");
    document.getElementById("2").classList.remove("red-button");
    document.getElementById("3").classList.remove("red-button");
    document.querySelector("main").classList.remove("light-theme");
    document.querySelector("main").classList.remove("third-theme");
    document.getElementById("1").classList.add("red-button");
    document.getElementById("2").classList.add("transparent-button");
    document.getElementById("3").classList.add("transparent-button");
  });
}

function thirdTheme() {
  document.getElementById("3").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("3").classList.remove("transparent-button");
    document.getElementById("1").classList.remove("red-button");
    document.getElementById("2").classList.remove("red-button");
    document.querySelector("main").classList.add("third-theme");
    document.querySelector("main").classList.remove("light-theme");
    document.getElementById("3").classList.add("red-button");
    document.getElementById("1").classList.add("transparent-button");
    document.getElementById("2").classList.add("transparent-button");
  });
}
