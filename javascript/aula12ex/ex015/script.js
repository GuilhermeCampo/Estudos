 


 function verificar(){
    var anoNascimento = document.querySelector('input#ano')
    var anoAtual = 2024
    var ano = Number(anoNascimento.value)
    var idade = (anoAtual-ano)

 
    

    var res = document.querySelector('p#res')
    var foto = document.querySelector('img#foto')
    
    


        if (idade < 18){  //adolescente

             if (document.getElementById('sexof').checked){
                foto.src='imagens/mjovem.png'
                foto.style.display='block'
                res.innerHTML=`Você é uma adolescente de ${idade} anos.`
            } else if (document.getElementById('sexom').checked){
                foto.src='imagens/hjovem.png'
                foto.style.display='block'
                res.innerHTML=`Você é um adolescente de ${idade} anos.`
             }
            
        } else if (idade >= 18 && idade < 40 ){ //adulto

            if (document.getElementById('sexom').checked){    
                foto.src='imagens/adulto.png'
                foto.style.display='block'
                res.innerHTML=`Você é um homem adulto de ${idade} anos.`

            } else if (document.getElementById('sexof').checked){ 
                foto.src='imagens/adulta.png'
                foto.style.display='block'
                res.innerHTML=`Você é uma mulher adulta de ${idade} anos.`
            }

        } else if (idade >= 40){ //idoso
            if (document.getElementById('sexom').checked){
                foto.src='imagens/idoso.png'
                foto.style.display='block'
                res.innerHTML=`Você é um idoso de ${idade} anos.`
            } else if (document.getElementById('sexof').checked){
                foto.src='imagens/idosa.png'
                foto.style.display='block'
                res.innerHTML=`Você é uma idosa de ${idade} anos.`
            }
        }

}
