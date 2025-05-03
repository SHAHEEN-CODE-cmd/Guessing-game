// Guessing Game
const max=prompt("Enter tha max number");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the random number");

while(true){
    if(guess=='quit'){
        console.log("User quit the game");
        break;
    }
    if(guess==random){
        console.log("You are Right , CONGRATS!! random number was", random);
        break;
    }else if(guess < random){
        guess=prompt("Your guess was too small, please try again");
    }else if(guess > random){
        guess=prompt("Your guess was too large, please try again");
    }else{
        guess=prompt("wrong guess, please enter numbers only")
    }
}

