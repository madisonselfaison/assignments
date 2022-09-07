
var readlineSync = require('readline-sync');
var name = readlineSync.question("Welcome to the treacherous world under the sea! Enter your name if you dare: ");
var enemies = ["Klay the Killer Whale", "George the Giant Squid", "Sheldon the Shark"];

var wildAdventure = function() {
	var self = this;
	var enemy;
	var generateRandomEnemy = function() {
		var randomInt = Math.floor(Math.random() * ((enemies.length - 1) - 0 + 1)) + 0;
		enemy = enemies[randomInt];
		return enemy;
	};
	this.user = name;
	this.userIsActive = true;
	this.userHp = 100;
	this.enemyHp = 100;
	this.enemyIsActive = null;
	this.enemyCount = 1;

	this.userAction = function() {
		var action = readlineSync.question('What do you want to do?, enter "r" to swim away, or "a" to attack: ').toLowerCase();
		var userAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);

		switch(action) {
			case 'r':
				self.userIsActive = false;
				console.log('Wow. You lost your gills because you ran away and ' +  enemy + ' can smell your weakness.');
				setTimeout(function(){
					console.log(enemy + ' has eaten you!');
				}, 60);
				break;
			case 'a':
				self.enemyHp -= userAttackPower;
				console.log('You just attacked ' + enemy + ' for ' + userAttackPower + ' attack power');
				break;
			default:
				console.log('Please enter a valid key');
		}

	};

	this.enemyAction = function() {
		if(self.userIsActive === true && self.enemyHp > 0) {
			var enemyAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);
			self.userHp -= enemyAttackPower;
			console.log(enemy + ' just attacked you for ' +  enemyAttackPower + ' attack power');

			if(self.userHp <= 0) {
				self.userIsActive = false;
				console.log(enemy + ' has killed ' + self.user + ' may you rest in kelp.');
			}

		} else if (self.enemyHp <= 0) {
			self.enemyIsActive = false;
			self.enemyCount++;
			console.log(self.user + ' has killed ' + enemy);
		}
	};

	this.restoreEnemy =  function() {
		self.enemyIsActive = true;
		self.enemyHp = 50;
	};

	this.processAttack = function() {
		if(self.enemyIsActive) {
			while(self.enemyHp > 0 && self.userIsActive === true) {
				self.userAction();
				self.enemyAction();
			}
		}
	};

	this.initialize = function() {
		self.enemyIsActive = true;
		readlineSync.keyIn('Welcome, ' + name + '! Press "s" to swim: ');
		generateRandomEnemy();
		console.log('Swimming...');
		console.log('Oh barnacles! ' + enemy + ' has appeared');
		self.processAttack();

		while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
			console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
			readlineSync.keyIn('Press "s" to swim: ');
			generateRandomEnemy();
			console.log('Swimming...');
			console.log('Oh barnacles! ' + enemy + ' has appeared');
			self.restoreEnemy();
			self.processAttack();
		}

		if (self.enemyIsActive === false) {
			console.log(self.user + ' is the master the ocean!');
		}
	};
	
	this.initialize();
};

wildAdventure();












// const readline = require("readline-sync");


// const name = readline.question("Welcome to the treacherous world under the sea! Enter your name if you dare: ");
// console.log("Hello " + name + "! Nice gills you've got there. I am glad you came prepared because things are about to get crazy...")

// this.user = name;
// this.userIsActive = true;
// this.userHp = 100;

// const enemies = ["Klay the Killer Whale", "George the Giant Squid", "Sheldon the Shark"];

// const options = ["Walk, Quit"]

// function askQuestion() {
//     gameOptions = readline.keyInSelect(options, "What would you like to do next?")
// }



// function walk(){ 
//     const willFight = prompt('(f) for fighting, (i) for checking inventory')
//     if(willWalk === "f"){
//         fight()
//     } else if (willWalk === "i"){
//         checkInventroy()
//     } 
// }

// function fight(){
//     const winner = selectWinner()
// }

// while(hp > 0){
//     walk()
// }