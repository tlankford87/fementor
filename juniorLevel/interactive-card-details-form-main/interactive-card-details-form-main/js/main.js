document.querySelector('#confirm').addEventListener('click', changeCard)




function changeCard(){
    //cc number
    const cardNumber = document.getElementById('cardNumber')
    const cNumber = document.getElementById('cNumber').value
    let cNumberSpaced = cNumber.match(/.{1,4}/g)
    let cNumValue = cNumberSpaced.join(' ')
    
    cardNumber.textContent = cNumValue

    //customer name
    const name = document.getElementById('name')
    const chName = document.getElementById('chName')

    name.textContent = chName.value

    //exp date
    const experation = document.getElementById('experation')
    const month = document.getElementById('expMonth')
    const year = document.getElementById('expYear')

    experation.textContent = `${month.value}/${year.value}`
    
    //cvc
    const cardCVC = document.getElementById('cardCVC')
    const cvc = document.getElementById('cvc')

    cardCVC.textContent = cvc.value

}