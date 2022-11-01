// document.querySelector('#confirm').addEventListener('click', changeCard)




function changeCardNum(){
    //cc number
    const cardNumber = document.getElementById('cardNumber')
    const cNumber = document.getElementById('cNumber').value
    const ccNumWarn = document.getElementById('ccNumWarn')
    let cNumberSpaced = cNumber.match(/.{1,4}/g)
    let cNumValue = cNumberSpaced.join(' ')
    if(!cNumValue.match(/^[0-9 ]+$/)){
        ccNumWarn.classList.toggle('hidden')
    }
    cardNumber.textContent = cNumValue

}


function changeCardName(){
    //customer name
    const name = document.getElementById('name')
    const chName = document.getElementById('chName')

    name.textContent = chName.value

}

function changeCardExp(){
    //exp date
    const experation = document.getElementById('experation')
    const month = document.getElementById('expMonth')
    const year = document.getElementById('expYear')

    experation.textContent = `${month.value}/${year.value}`
    
}

function changeCardCVC(){

    //cvc
    const cardCVC = document.getElementById('cardCVC')
    const cvc = document.getElementById('cvc')

    cardCVC.textContent = cvc.value

}