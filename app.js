const yourGuess = 0; 
const randNumber=Math.floor(Math.random(0) *100); 

var count=0;

function randomNumberGame(){

      let yourGuess=  parseInt(prompt("Enter your number: "));
        if(yourGuess<1 || yourGuess>100){
            Alert("please guess between 1-100"); 
            count++;
        }
      else if(yourGuess===randNumber){
        count++; 
        alert(`You have guessed right and it just too you ${count} attemps`); 
        randomNumberGame(); 
    } else if (yourGuess<randNumber){
        alert("higher"); 
        count++; 
        randomNumberGame();
    }else if(yourGuess>randNumber){
        alert("lower");
        count++; 
        randomNumberGame(); 
    }else{
        alert("enter a valid number"); 
        randomNumberGame();
        count++; 
    }
}

console.log(randNumber);
randomNumberGame();