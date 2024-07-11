function calcular(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo= document.querySelector('input#passo')


    var res = document.getElementById('res')
    for (var i=inicio; i<fim ;i += passo){
        res.innerHTML=i
    }
}