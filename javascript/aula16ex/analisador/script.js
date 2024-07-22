let num = document.getElementById("num");
let sel = document.getElementById("flist");
let res = document.querySelector("div#res");

let valores = [];

// função para verificar se o numero está entre 1 e 100
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

// funcção para encontrar valores iguais na lista
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value));

    let item = document.createElement("option");
    item.text = ` ${num.value} foi adicionado à lista`;
    sel.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("O número é inválido ou já se encontra na lista.");
  }

  num.value = "";
  num.focus();
}

function contar() {
  let maior = valores[0];
  let menor = valores[0];
  let soma = 0;
  let media = 0;
  for (let pos in valores) {
    soma += valores[pos];

    media = soma / valores.length;
    if (valores[pos] > maior) maior = valores[pos];

    if (valores[pos] < menor) {
      menor = valores[pos];
    }
  }

  if (valores.length == 0) {
    window.alert("Não possui valores");
  } else {
    valores.sort();
    res.innerHTML = ``;
    res.innerHTML += `<p> Ao todo temos ${valores.length} número cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`;
    res.innerHTML += `<p> a Soma dos valores é ${soma}</p>`;
    res.innerHTML += `<p> A média dos valores é ${media}.</p>`;
  }
}
