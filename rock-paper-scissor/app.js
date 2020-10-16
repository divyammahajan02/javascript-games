let userScore = 0
let compScore = 0
const userScore_board = document.getElementById('user-score')
const compScore_board = document.getElementById('comp-score')
const moves = document.querySelector('.moves > p')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

let divyam = 1;


function compChoice() {
	let choice = ['rock', 'paper', 'scissor']
	chosed = choice[Math.floor(Math.random() * 3)]
	return chosed;
}

function win(userChoose, compChoose) {
	userScore++;
	userScore_board.innerHTML = userScore;
	const userWord = ' user'.fontsize(3)
	const computerWord = ' computer'.fontsize(3)
	moves.innerHTML = `${userChoose}${userWord} < beats > ${compChoose}${computerWord}`
	if(userScore == 5) {
		rock.disabled = true
		paper.disabled = true
		scissor.disabled = true
		winner('User', 'Computer');
	}
}

function lose(userChoose, compChoose) {
	compScore++;
	compScore_board.innerHTML = compScore;
	const userWord = ' user'.fontsize(3)
	const computerWord = ' computer'.fontsize(3)
	moves.innerHTML = `${userChoose}${userWord} < lose > ${compChoose}${computerWord}`
	if(compScore == 5) {
		rock.disabled = true
		paper.disabled = true
		scissor.disabled = true
		winner('Computer', 'User')

	}
	
}

function draw(userChoose, compChoose) {
	const userWord = ' user'.fontsize(3)
	const computerWord = ' computer'.fontsize(3)
moves.innerHTML = `${userChoose}${userWord} < draw > ${compChoose}${computerWord}`
	if(userScore === 5 && compScore === 5) {
		rock.disabled = true
		paper.disabled = true
		scissor.disabled = true
		moves.innerHTML = `Its a draw !`

	}
}

function winner(win, lose){
	moves.innerHTML = `:)) ${win} < beats >  : (( ${lose}`


}

function refree(userChoose, compChoose) {
	switch(userChoose+compChoose) {
		case 'rockscissor':
		case 'paperrock':
		case 'scissorpaper':
			 win(userChoose, compChoose)
			 break;
		case 'rockpaper':
		case 'paperscissor':
		case 'scissorrock':
			 lose(userChoose, compChoose)
			 break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorscissor':
			 draw(userChoose, compChoose)
			 break;
	}
}

function main(userScore) {
	rock.addEventListener('click', function() {
		refree('rock', compChoice())
	})

	paper.addEventListener('click', function() {
		refree('paper', compChoice())
	})

	scissor.addEventListener('click', function() {
		refree('scissor', compChoice())
	})
}

main()
