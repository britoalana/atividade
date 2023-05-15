const btnNotas = document.getElementById('btn')

btnNotas.addEventListener('click', () => {
    let inSaque = document.getElementById('inSaque')
    let saque = inSaque.value
    let outCem = document.getElementById('outCem')
    let outCinquenta = document.getElementById('outCinquenta')
    let outDez = document.getElementById('outDez')

    if (saque % 10 != 0 || saque == 0 || isNaN(saque)) {
        alert('Saque indisponível')
        document.getElementById('inSaque').value = ''
        return
    }

    let notaCem = Math.floor(saque / 100)
    let resto = saque % 100
    let notaCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    let notaDez = Math.floor(resto / 10)

    if (notaCem > 0) {
        outCem.textContent = `Notas de R$ 100: ${notaCem}`;
    }
    if (notaCinquenta > 0) {
        outCinquenta.textContent = `Notas de R$ 50: ${notaCinquenta}`;
    }
    if (notaDez > 0) {
        outDez.textContent = `Notas de R$ 10: ${notaDez}`;
    }
})