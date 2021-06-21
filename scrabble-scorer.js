// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
let userWord;

const input = require("readline-sync");

let simpleScore = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']
};

let vowelBonusScore = [];

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let scrabbleScore = "";

let word = "";
let prompt = "";

function initialPrompt() {
   userWord = input.question(`Let's play some Scrabble!
   
Enter a word to score: `);

};

function scrabbleScorer(word){
  word = word.toUpperCase();
  let letterPoints = 0;
  let score = 0

  for (let i = 0; i < word.length; i++){
    for (const pointValue in newPointStructure)

    score += Number(pointValue)
  }
  return console.log(`Score for ${userWord}: ${letterPoints}`); 
}

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
  let score = 0 

	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`

      score += Number(pointValue)
      }
    }
  }
  

	return console.log(`Score for ${userWord}: ${score}`);
 }


function simpleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = 0
  for (let i = 0; i < word.length; i++){
    letterPoints += 1
  }
  return console.log(`Score for ${userWord}: ${letterPoints}`);
}

function vowelBonusScorer(word){
  let letterPoints = 0
  let vowels = ["A", "E", "I", "O", "U"];
    word = word.toUpperCase()
  for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])){
      letterPoints += 3
    } else {
      letterPoints += 1
    }
  }
  return console.log(`Score for ${userWord}: ${letterPoints}`); 
}


let simpleScorerObject = {
  name: "Simple Score ",
  description: "Each letter is worth 1 point. ",
  scoringFunction: simpleScorer
};
let vowelBonusScorerObject = {
  name: "Bonus Vowels ",
  description: "Vowels are 3 pts, consonants are 1 pt. ",
  scoringFunction: vowelBonusScorer
};
let scrabbleScorerObject = {
  name: "Scrabble ",
  description: "The traditional scoring algorithm. ",
  scoringFunction: scrabbleScorer
}

const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, scrabbleScorerObject];



function scorerPrompt() {
  prompt = input.question(`Which scoring algorithm would you like to use? 

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `)

scoringAlgorithms[prompt].scoringFunction(userWord);  

return 

}



function transform(oldPointStructure) {
  for (key in oldPointStructure){
    for (let i = 0; i < oldPointStructure[key].length;i++){
      console.log(oldPointStructure[key][i])
    }
  }
};

let newPointStructure = {
  newPointStructure: function transform(oldPointStructure){
    return 
  }
}

function runProgram() {
   initialPrompt();
  //  transform(oldPointStructure);
  //  oldScrabbleScorer(userWord);
  //  simpleScorer(userWord);
  //  vowelBonusScorer(userWord);
   scorerPrompt(prompt);
}










// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

