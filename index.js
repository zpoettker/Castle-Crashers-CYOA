let food = 1;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector(".text");
const foodText = document.querySelector("#foodText");
const healthText = document.querySelector(".healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector(".monsterStats");
const monsterName = document.querySelector(".monsterName");
const monsterHealthText = document.querySelector(".monsterHealth");

const weapons = [
    {name: 'stick', power: 10},
    {name: 'sharp fish', power: 25},
    {name: 'light saber', power: 50},
    {name: 'dragon sword', power: 100}
]

const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Go to odd job"],
      "button functions": [goStore, goCave, oddJob],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      "button text": ["Buy 1 food (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyFood, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
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
      text: "There once was a ship that put to sea \n The name of the ship was Billy O' Tea... \n The winds blew up her bown dipped down \n oh blow my bully boys blowwwwww \n \n Soon may the Willerman come \n To bring us sugar and tea and rum... \n One day when the tonguing is done \n We'll take our leave and goooo \n \n You've been tipped by nearby listeners, \n \n +3 GOLD"
    }
  ];

  const trivia = [
    {
      name: "1",
      "button text": ["Health", "Strength", "Agality"],
      "button functions": [wrong, right, wrong],
      text: "In the original Castle Crashers game, what does the 'muscle arm' stat represent?"
    },
    {
      name: "2",
      "button text": ["Boss killer", "Highest level", "Free-for-all winner"],
      "button functions": [wrong, wrong, right],
      text: "In the original Castle Crashers game, which player gets to kiss the princess at the end of a boss fight?"
    },
    {
      name: "3",
      "button text": ["42", "chocolate", "idk"],
      "button functions": [right, wrong, wrong],
      text: "What is the answer to the universe?"
    },
    {
      name: "4",
      "button text": ["Arrows", "Fire", "Lightning"],
      "button functions": [wrong, wrong, right],
      text: "In the original Castle Crashers game, what was the magic power posessed by the 'red' knight?"
    },
    {
      name: "5",
      "button text": ["Gas", "Earth", "Arrows"],
      "button functions": [right, wrong, wrong],
      text: "In the original Castle Crashers game, which player gets to kiss the princess at the end of a boss fight?"
    }
  ];


  // initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = oddJob;

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
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

//paceholder functions
function fightSlime(){
  console.log("hello");
}
function fightDragon(){
  console.log("hello");
}
function buyHealth(){
console.logO("hello");
}

function buyFood(){

  if (food < 5 && gold >= 10) {
  food += 1;
  gold -= 10;
  goldText.innerText = gold;
  foodText.innerText = food;
  }
  else if (gold < 10) {
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
else if(food >= 1 && health <= 30 && health > 0) {
  updateFood(50)
}


}

function buyWeapon(){
  console.log("hello");
}

function fightBeast(){
  console.log("hello");
}

function oddJob() {
  update(trivia[(Math.floor(Math.random()*5)) - 1])
}

function wrong() {
  update(locations[3]);
  gold--;
  goldText.innerText = gold;
  text.innerText += "-1 GOLD";
}

function right() {
  update(locations[4]);
  gold += 5;
  goldText.innerText = gold;
  text.innerText += "+5 GOLD";
}

function burnJob() {
  console.log("burn down the place");
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

//need to fix random number selector, I think it would be better to just have a list of questions instead, this way we could guarentee that no answers will be repeated, once you get through all the questions you are done, and we can provide an answer key