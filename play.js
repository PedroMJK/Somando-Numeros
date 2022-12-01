function somar() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let resul = window.document.querySelector('div.res')
    let n1 = Number(tn1.value)          // Pega o valor dentro da primeira caixa de texto
    let n2 = Number(tn2.value)         // Pega o valor dentro da segunda caixa de texto
    let res = n1 + n2
    resul.innerHTML = `A Somar entre ${n1} e ${n2} é igual a <strong>${res}</strong>`
}