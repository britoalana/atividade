const btnRaiz = document.getElementById('btn')

btnRaiz.addEventListener('click', () => {
    let inNumber = document.getElementById('inNumber')
    let number = inNumber.value

    if(Math.sqrt(number) % 1 === 0){
        outRaiz.textContent = `${Math.sqrt(number)}`
    }else{
        outRaiz.textContent = `Não existe raiz exata para ${number}`
    }
})