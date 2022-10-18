// Create random number
let randomNumber1 = Math.floor(Math.random() * 6) +1;
let randomNumber2 = Math.floor(Math.random() * 6) +1;

// Select first player element
let img1 = document.querySelector('.img1');
img1.setAttribute('src', `images/dice${randomNumber1}.png`);

// Select second player element
let img2 = document.querySelector('.img2');
img2.setAttribute('src', `images/dice${randomNumber2}.png`)

// Select heading to announce a winner
let result = document.querySelector('.container h1');

// Select player heading to manipulate css
let player_1_Css = document.querySelector('#player1');
let player_2_Css = document.querySelector('#player2');

if(randomNumber1 > randomNumber2){
    result.textContent = 'Player 1 wins';
    player_1_Css.style.color = '#4dff4d';
    player_2_Css.style.color = '#ff1a1a';
}else if(randomNumber2 > randomNumber1){
    result.textContent = 'Player 2 wins';
    player_2_Css.style.color = '#4dff4d';
    player_1_Css.style.color = '#ff1a1a';
}else if(randomNumber1 == randomNumber2){
    result.textContent = 'Draw';
}