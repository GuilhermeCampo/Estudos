let num = document.getElementById("num");
let sel = document.getElementById("flist");
let res = document.querySelector("div#res");

let valores = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    window.alert("tudo ok");
  } else {
    window.alert("Insira um numero válido");
  }
}
