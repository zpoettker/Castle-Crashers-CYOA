let food = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

const text = document.querySelector(".text");
const foodText = document.querySelector(".foodText");
const healthText = document.querySelector(".healthText");
const goldText = document.querySelector(".goldText");
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
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
    }
  ];

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

  
