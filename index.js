let food = 1;
let health = 100;
let gold = 50;
let currentWeapon = 1;
var fighting = 0;
let monsterHealth;
let inventory = [,"Bare Hands", "Stick"];
let triviaQuestion = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector(".text");
const foodText = document.querySelector("#foodText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const weaponText = document.querySelector("#weaponText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterPower = document.querySelector("#monsterPower");
const monsterHealthText = document.querySelector("#monsterHealth");

  // initialize buttons
  button1.onclick = goStore;
  button2.onclick = goFight;
  button3.onclick = oddJob;


  //Arrays
const weapons = [
    {name: 'Bare Hands', power: 1},
    {name: 'Stick', power: 4},
    {name: 'Sharp Fish', power: 8},
    {name: 'Sledge Hammer', power: 12},
    {name: 'Light Saber', power: 16},
    {name: 'Dragon Sword', power: 25}
]

const monsters = [
  {
    name: "Slime",
    level: 3,
    health: 30
  },
  {
    name: "Giant Cat",
    level: 5,
    health: 75
  },
  {
    name: "Dragon",
    level: 10,
    health: 300
  }
]

const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Fight", "Go to odd job"],
      "button functions": [goStore, goFight, oddJob],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      "button text": ["Buy 1 food (20 gold)", "Buy weapon (50 gold)", "Go to town square"],
      "button functions": [buyFood, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "burned",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown, goTown, goTown],
      text: "You burn the small business to the ground.\n \nNo one was hurt, but you were placed at the scene of the crime by a witness. You've been booked, fined, and spend the next year in jail. \n \nOnce you've been released, you shed a manly tear at the sight of society, you are hit with a revelation of how beautiful and precious life is. You question why you decided to burn down your work site in the first place. You now remember that before you did hard time you were on a quest to save some princess or something and decide to dedicate the rest of your life to that."
    },
    {
      name: "jobwrong",
      "button text": ["Play again", "Burn down job", "Go to town square"],
      "button functions": [oddJob, burnJob, goTown],
      text: "Your answer was incorrect.. I hope you're better at fighting monsters.. \n \n"
    },
    {
      name: "jobright",
      "button text": ["Play again", "Buy a beer", "Go to town square"],
      "button functions": [oddJob, buyBeer , goTown],
      text: "That's right! You aren't cheating are you?\n \n"
    },
    {
      name: "beerbought",
      "button text": ["Play again", "sing a song", "Go to town square"],
      "button functions": [oddJob, singSong , goTown],
      text: "you bought a celebration beer, then that beer bought a beer \n \n -2 GOLD"
    },
    {
      name: "songsang",
      "button text": ["Play again", "play again", "Go to town square"],
      "button functions": [oddJob, oddJob , goTown],
      text:  ' "There once was a ship that put to sea \n The name of the ship was Billy O` Tea... \n The winds blew up her bown dipped down \n oh blow my bully boys blowwwwww \n \n Soon may the Willerman come \n To bring us sugar and tea and rum... \n One day when the tonguing is done \n We`ll take our leave and goooo!!" \n \n You`ve been tipped by nearby listeners, \n \n +3 GOLD '
    },
    {
      name: "fighting",
      "button text": ["Attack", "Eat food", "Run"],
      "button functions": [attack, eatFood, goRun],
      text:  "You are fighting a MONSTER! \n \n IT IS KILL OR BE KILLED... or run."
    },
    {
      name: "kill monster",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown, goTown, goTown],
      text: "You defeated the " + monsters[fighting].name + "! \n \nYou found some gold aswell."
    },
    {
      name: "lose",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart, restart, restart],
      text: "You died. \n \n GAME OVER"
    },
    {
      name: "sure",
      "button text": ["Play Again", "Yes I'm sure", "Go to town square"],
      "button functions": [oddJob, imSure, goTown],
      text: "You're about to commit arson, are you sure you want to do that?"
    },
    {
      name: "sure sure",
      "button text": ["Play Again", "I'm sure I'm sure", "Go to town square"],
      "button functions": [oddJob, imSureSure, goTown],
      text: "Are you sure you're sure?"
    }, 
    {
      name: "sure sure",
      "button text": ["Play Again", "Burn it to the ground", "Go to town square"],
      "button functions": [oddJob, burn, goTown],
      text: "C'mon man it's just a game, people could get hurt!"
    },
  ];

  const trivia = [
    {
      name: "0",
      "button text": ["Health", "Strength", "Agility"],
      "button functions": [wrong, right, wrong],
      text: "In the original Castle Crashers game, what does the 'muscle arm' stat represent?",
      answer: "'Stength'"
    },
    {
      name: "1",
      "button text": ["Boss killer", "Highest level", "Free-for-all winner"],
      "button functions": [wrong, wrong, right],
      text: "In the original Castle Crashers game, which player gets to kiss the princess at the end of a boss fight?",
      answer: "'The free-for-all winner'"
    },
    {
      name: "2",
      "button text": ["42", "chocolate", "idk"],
      "button functions": [right, wrong, wrong],
      text: "What is the answer to the universe?",
      answer: "'42'"
    },
    {
      name: "3",
      "button text": ["Arrows", "Fire", "Lightning"],
      "button functions": [wrong, wrong, right],
      text: "In the original Castle Crashers game, what was the magic power posessed by the 'red' knight?",
      answer: "'Lightning'"
    },
    {
      name: "4",
      "button text": ["Gas", "Earth", "Arrows"],
      "button functions": [right, wrong, wrong],
      text: "In the original Castle Crashers game, what was the magic power posessed by the 'green' knight?",
      answer: "'Gas'"
    },
    {
      name: "5",
      "button text": ["Mammal", "Amphibian", "Reptile"],
      "button functions": [right, wrong, wrong],
      text: "What classification is a platypus?",
      answer: "'Mammal'"
    },
    {
      name: "6",
      "button text": ["Poop", "Cry", "Sweat"],
      "button functions": [right, wrong, right],
      text: "In the original Castle Crashers game, what did the bear do when it was scared of the Giant Cat?",
      answer: "'Poop or Sweat'"
    },
    {
      name: "7",
      "button text": ["Air", "Lightning", "Arrows"],
      "button functions": [wrong, wrong, right],
      text: "In the original Castle Crashers game, what was the magic power posessed by the 'grey' knight?",
      answer: "'Arrows'"
    },
    {
      name: "8",
      "button text": ["0", "1", "1/6295151"],
      "button functions": [wrong, right, wrong],
      text: "What is 6295151^0?",
      answer: "'1'"
    },
    {
      name: "9",
      "button text": ["Handsome", "Smart", "Kind"],
      "button functions": [right, right, right],
      text: "What attribute is a good fit to describe Zach?",
      answer: "'Any'"
    },
    {
      name: "10",
      "button text": ["100", "55", "99"],
      "button functions": [wrong, wrong, right],
      text: "In the original Castle Crashers game, what was the max level you could upgrade your character to?",
      answer: "'99'"
    }
  ];

  const attackTexts = [
    "\n \nYou attack it with your " + weapons[currentWeapon].name + ".", 
    "\n \nYour " + weapons[currentWeapon].name + " slashes the monster's face!", 
    "\n \nBOOM! BOW!", 
    "\n \nYou are glad you have your trusty " + weapons[currentWeapon].name + " as you attack the monster.",
    "\n \nYou lung at the " + monsters[fighting].name + " with your " + weapons[currentWeapon].name + "!"
  ]

 function update(location){
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
 }

 function goTown() {
  update(locations[0]);
  monsterStats.style.display = "none";
}

function goStore() {
  update(locations[1]);
}

function buyHealth(){
console.logO("hello");
}

function buyFood(){

  if (food < 5 && gold >= 20) {
  food += 1;
  gold -= 20;
  goldText.innerText = gold;
  foodText.innerText = food;
  }
  else if (gold < 20) {
  text.innerText = "You don't have enough gold! Better get a job..."
  }
  else if(food = 5) {
    text.innerText = "Leave some food for the rest of us!"
  }
else {console.log("error")};
}

function updateFood(hea){
  health += hea;
  food -= 1;
  healthText.innerText = health;
  foodText.innerText = food;
}

function eatFood(){
  if (food >= 1 && health <= 99 && health > 74) {
      health = 100;
      food -= 1;
      healthText.innerText = health;
      foodText.innerText = food;
  }
else if(food >= 1 && health <= 74 && health > 50) {
  updateFood(25);
}
else if(food >= 1 && health <= 50 && health > 30) {
  updateFood(35)
}
else if(food >= 1 && health <= 30 && health > 15) {
  updateFood(50)
}
else if(food >= 1 && health <= 15 && health > 0) {
  updateFood(65)
}


}

function buyWeapon(){
  if (currentWeapon < weapons.length - 1) {
    if(gold >= 50){
      currentWeapon++;
      gold -= 50;
      let newWeapon = weapons[currentWeapon].name;
      goldText.innerText = gold;
      weaponText.innerText = newWeapon;
      text.innerText = "You now have a " + newWeapon + "!"


    } else {
      text.innerText = "No discounts!!! This weapon is to expensive for you.."
    }
  } else {
    text.innerText = "You already have the most powerful weapon.. THE DRAGON SWORD!"
  }
}

function oddJob() {
  if(triviaQuestion < 10)
    {
  update(trivia[triviaQuestion]);
    }
    else {
      text.innerText = "We ran out of work for you, sorry."
    }
}

function wrong() {
  update(locations[3]);

if(gold > 0){
  gold--;
  goldText.innerText = gold;
  text.innerText += "The correct answer was " + trivia[triviaQuestion].answer + ".";
  text.innerText += "\n \n-1 GOLD";
  
} else {
console.log("0 gold")
text.innerText += "The correct answer was " + trivia[triviaQuestion].answer + ".";
}
triviaQuestion++;
}

function right() {
  update(locations[4]);
  gold += 5;
  goldText.innerText = gold;
  text.innerText += "+5 GOLD";
  triviaQuestion++;
}

function burnJob() {
  update(locations[10]);
}

function imSure(){
update(locations[11]);
}

function imSureSure(){
update(locations[12]);
}

function burn(){
update(locations[2]);
health = 100;
food = 5;
gold = 0;
currentWeapon = 0;
healthText.innerText = health;
foodText.innerText = food;
goldText.innerText = gold;
let newWeapon = weapons[currentWeapon].name;
weaponText.innerText = newWeapon;

}

function buyBeer() {
  update(locations[5]);
  gold -= 2;
  goldText.innerText = gold;
}

function singSong() {
  update(locations[6]);
  gold += 3;
  goldText.innerText = gold;
}
function goFight() {
  update(locations[7]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  monsterPower.innerText = monsters[fighting].level;
}
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  let generator = Math.floor(Math.random() * 5)
  text.innerText += attackTexts[generator];
  let monsterAttack = ((monsters[fighting].level) * Math.floor(Math.random() * 3 + 1));
  let playerAttack = ((weapons[currentWeapon].power) * Math.floor(Math.random() * 3 + 1));
  health -= monsterAttack;
  monsterHealth -= playerAttack;    
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  text.innerText += "\n \n+" + playerAttack + " ATTACK";
  text.innerText += " -" + monsterAttack + " HEALTH";
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
      defeatMonster();
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}
}
function defeatMonster(){

  if(fighting < 5){
    let goldNumber = Math.floor(monsters[fighting].level * 6.7)
gold += goldNumber;
console.log(fighting);
goldText.innerText = gold;
update(locations[8]);
monsterHealthText.innerText = "DEAD"
text.innerText += "\n \n+" + goldNumber + " GOLD"
fighting++;
} else {
  winGame()
}
}

function winGame(){
  console.log("You win!");
}

function lose(){
update(locations[9]);
healthText.innerText = "DEAD";
}

function restart(){
    health = 100;
    gold = 50;
    currentWeapon = 1;
    inventory = ["Bare Hands", "Stick"];
    fighting = 0;
    triviaQuestion = 0;
    goldText.innerText = gold;
    healthText.innerText = health;
    weaponText.innerText = weapons[currentWeapon].name;
    goTown();
}

function goRun(){
  if((Math.floor(Math.random() * 20 + 1)) === 1){
    lose()
    text.innerText += "\n \n The monster got you while trying to run :("
  } else {goTown()}
}

//need to fix random number selector, I think it would be better to just have a list of questions instead, this way we could guarentee that no answers will be repeated, once you get through all the questions you are done, and we can provide an answer key
