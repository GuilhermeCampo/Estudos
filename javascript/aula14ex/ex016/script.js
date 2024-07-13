function calcular(){

    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let step = document.getElementById('passo')
    let res = document.querySelector('div#res')



        if (ini.value.length == 0 || fim.value.length == 0 || step.value.length == 0){
            window.alert('[ERRO] Há dados faltando!')
        } else {

                    
                    res.innerHTML=`Calculando...`
                    let i = Number(ini.value)
                    let f = Number(fim.value)
                    let p = Number(step.value)

                    if (p == 0){
                        window.alert('Passo inválido. Considerando passo =1')
                        p = 1
                        
                    }

                if (i < f){
                    for (let c = i; c <= f ; c += p){
                        res.innerHTML += ` \u{1F449} ${c}  `
                    }
                    res.innerHTML += `\u{1F3C1}`
                } else {
                    for ( let c = i; c>=f; c -= p){
                        res.innerHTML += `\u{1f449} ${c}`
                    }
                     res.innerHTML += `\u{1F3C1}`
                }
            
                } 
            
            




        }