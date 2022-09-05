//click event states start

document.querySelector('#one').addEventListener('click', clickOne)
document.querySelector('#two').addEventListener('click', clickTwo)
document.querySelector('#three').addEventListener('click', clickThree)
document.querySelector('#four').addEventListener('click', clickFour)
document.querySelector('#five').addEventListener('click', clickFive)


function clickOne() {
    document.querySelector('#one').style.background = '#fb7615'
    document.querySelector('#one').style.color = '#fff'
    document.querySelector('#two').style.background = '#7d8797'
    document.querySelector('#two').style.color = '#fff'
    document.querySelector('#three').style.background = '#2e3b47'
    document.querySelector('#three').style.color = '#818994'
    document.querySelector('#four').style.background = '#2e3b47'
    document.querySelector('#four').style.color = '#818994'
    document.querySelector('#five').style.background = '#2e3b47'
    document.querySelector('#five').style.color = '#818994'
    document.querySelector('#rating').innerText = '1'
}

function clickTwo() {
    document.querySelector('#two').style.background = '#fb7615'
    document.querySelector('#two').style.color = '#fff'
    document.querySelector('#one').style.background = '#7d8797'
    document.querySelector('#one').style.color = '#fff'
    document.querySelector('#three').style.background = '#7d8797'
    document.querySelector('#three').style.color = '#fff'
    document.querySelector('#four').style.background = '#2e3b47'
    document.querySelector('#four').style.color = '#818994'
    document.querySelector('#five').style.background = '#2e3b47'
    document.querySelector('#five').style.color = '#818994'
    document.querySelector('#rating').innerText = '2'
}

function clickThree() {
    document.querySelector('#three').style.background = '#fb7615'
    document.querySelector('#three').style.color = '#fff'
    document.querySelector('#two').style.background = '#7d8797'
    document.querySelector('#two').style.color = '#fff'
    document.querySelector('#one').style.background = '#2e3b47'
    document.querySelector('#one').style.color = '#818994'
    document.querySelector('#four').style.background = '#7d8797'
    document.querySelector('#four').style.color = '#fff'
    document.querySelector('#five').style.background = '#2e3b47'
    document.querySelector('#five').style.color = '#818994'
    document.querySelector('#rating').innerText = '3'
}

function clickFour() {
    document.querySelector('#four').style.background = '#fb7615'
    document.querySelector('#four').style.color = '#fff'
    document.querySelector('#two').style.background = '#2e3b47'
    document.querySelector('#two').style.color = '#818994'
    document.querySelector('#three').style.background = '#7d8797'
    document.querySelector('#three').style.color = '#fff'
    document.querySelector('#one').style.background = '#2e3b47'
    document.querySelector('#one').style.color = '#818994'
    document.querySelector('#five').style.background = '#7d8797'
    document.querySelector('#five').style.color = '#fff'
    document.querySelector('#rating').innerText = '4' 
}

function clickFive() {
    document.querySelector('#five').style.background = '#fb7615'
    document.querySelector('#five').style.color = '#fff'
    document.querySelector('#two').style.background = '#2e3b47'
    document.querySelector('#two').style.color = '#818994'
    document.querySelector('#three').style.background = '#2e3b47'
    document.querySelector('#three').style.color = '#818994'
    document.querySelector('#four').style.background = '#7d8797'
    document.querySelector('#four').style.color = '#fff'
    document.querySelector('#one').style.background = '#2e3b47'
    document.querySelector('#one').style.color = '#818994'
    document.querySelector('#rating').innerText = '5'
}

//submit rating system start

document.querySelector('#submit').addEventListener('click', submit)

function submit() {
    document.querySelector('.thankYou').classList.toggle('hidden');
    document.querySelector('.rateUs').classList.toggle('hidden');
}