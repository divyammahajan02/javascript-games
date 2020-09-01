document.addEventListener('DOMContentLoaded', () => {

 const cardArray = [
 	{
 	name: 'fries',
 	img: 'fries.png'
 	},
 	{
 	name: 'fries',
 	img: 'fries.png'
 	},
 	{
 	name: 'donat',
 	img: 'donat.png'
 	},
 	{
 	name: 'donat',
 	img: 'donat.png'
 	},
 	{
 	name: 'cake',
 	img: 'cake.png'
 	},
 	{
 	name: 'cake',
 	img: 'cake.png'
 	},
 	{
 	name: 'burger',
 	img: 'burger.png'
 	},
 	{
 	name: 'burger',
 	img: 'burger.png'
 	},
 	{
 	name: 'pizza',
 	img: 'pizza.jpg'
 	},
 	{
 	name: 'pizza',
 	img: 'pizza.jpg'
 	},
 	{
 	name: 'pie',
 	img: 'pie.png'
 	},
 	{
 	name: 'pie',
 	img: 'pie.png'
 	},

 ]

 cardArray.sort(() =>0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// create your board

function createBoard() {
	for(let i=0; i< cardArray.length; i++) {
		var card = document.createElement('img')
		card.setAttribute('src', 'blank.jpg')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}


// check for match

function checkForMatch() {
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if (cardsChosen[0] === cardsChosen[1]) {
		document.getElementById('choice').innerHTML = 'You Found One!'
		cards[optionOneId].setAttribute('src', 'white.jpg')
		cards[optionTwoId].setAttribute('src', 'white.jpg')
		cardsWon.push(cardsChosen)
	}
	else {
		cards[optionOneId].setAttribute('src', 'blank.jpg')
		cards[optionTwoId].setAttribute('src', 'blank.jpg')
		document.getElementById('choice').innerHTML = 'Try again'
	}
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if(cardsWon.length === cardArray.length/2) {

		resultDisplay.textContent = 'Congratulations ! you won'
	}
}

// flip card

function flipCard() {
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if(cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500)
	}

}

createBoard()




})