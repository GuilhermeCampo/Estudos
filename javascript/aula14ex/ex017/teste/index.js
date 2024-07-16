function calc(){
 

    let num = document.getElementById('num') //dado coletado

    let mtab = document.getElementById('multi')
    let dtab = document.getElementById('divi')
    let stab = document.getElementById('sub')


    let n = Number(num.value)
    
    
    mtab.innerHTML=""
    dtab.innerHTML=""
    stab.innerHTML=""

    if (num.value.length == 0){
        window.alert('Digite um número')
    } else {
        
       
        mtab.style.display='block'
        dtab.style.display='block'
        stab.style.display='block'
        
        for (let c=1; c<=10;c++){

            let item1 = document.createElement('option') //multiplicação
            mtab.appendChild(item1)
            item1.innerHTML+=`${n} x ${c} = ${n*c}` 

            let item2 = document.createElement('option') //divisão
            dtab.appendChild(item2)
            item2.innerHTML+=`${n} / ${c} = ${n/c}`

            let item3 = document.createElement('option') //exponenciação
            stab.appendChild(item3)
            item3.innerHTML+=`${n} ^ ${c} = ${n**c}`
        }
    }









}