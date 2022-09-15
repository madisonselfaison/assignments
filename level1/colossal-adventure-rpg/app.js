var readline = require('readline-sync');
var welcome = readline.question("Welcome to the treacherous world under the sea! Enter your name if you dare: ");

let player = {
    "hp": 50,
    "name": welcome
}

var enemyAtk = Math.floor(Math.random() * (50 - 25 + 1) + 25);
var playerAtk = Math.floor(Math.random() * (50 - 25 + 1) + 25);

function whatsName(){
    if(welcome === ""){
        this.user = welcome
    }
}

if(welcome !== null){
    whatsName()
    enterGame()
}
    
var enemies = [
    {name: "Klay the Killer Whale", hp: 100}, 
    {name: "George the Giant Squid", hp: 100}, 
    {name: "Sheldon the Shark", hp: 100}
];

function swim(){
    // console.clear()
    let chance = Math.floor((Math.random() * 2 ) + 1 )
    switch(chance){
        case 1:
            encounter()
            break;
            default: 
            safe()
            break;
    }  
}

function enterGame(){
    // console.clear()
    readline.keyInPause(`welcome, ${welcome}`)
}

function encounter(){
    // console.clear()
    let number = Math.floor((Math.random()*3) +0)
    let enemy = enemies[number]
    fight(enemy)
    choice()
}

function choice(){
    // console.clear()
    let journey = readline.keyIn(`Would you like to: (s) Continue swimming or (p) Print your stats? `, {limit:'$<s,p>'})
    if( journey === 's'){
        readline.keyInPause("You keep swimming")
    } else if ( journey === 'p'){
        print()
    }
}
function print(){
    // console.clear()
    readline.keyInPause("Name:" + welcome + `\nHp: ` + player.hp)
}

function safe(){
    // console.clear()
    readline.keyInPause('You are safe... For now')
    choice()
}

	function fight(enemy){
        foeHp = enemy.hp
        foeName = enemy.name
        engage = readline.keyIn('Oh no! You encountered ' + enemy.name + ', ' + ' (a) Attack or (r) Swim away ',{limit: '$<a,r>;'})
        engage = engage.toLowerCase()
        if (engage === 'a'){
            // console.clear()
            attack()
        }else if (engage === 'r'){
            runAway()
        }
    }

function attack(){
    while(engage === 'a'){ 
        enemyAttack = " attacks dealing " + enemyAtk + " points of damage to you " ; player.hp = player.hp - enemyAtk
        playerAttack = " attack " + foeName + " and deal "  + playerAtk + " points of damage, \n" ; foeHp = foeHp - playerAtk
            if(player.hp > 0){
                if(foeHp > 0){
                    engage = readline.keyIn(`You` + playerAttack + foeName + enemyAttack + `and your current HP is ` + player.hp + `. \n` + foeName + `'s current HP is ` + foeHp + `. (a) Attack again or (r) Swim away? `,{limit:'$<a,r>'})  
                }
            }else {
               readline.keyInPause("you survived in the ocean and got the Treasure Chest. You won!")
               engage=''
               process.exit()
            }
        } while(engage === 'r'){
            runAway()
        } if(player.hp <=0){
            loss()
        }
        }
        function runAway(){
            let chance = Math.floor((Math.random()*2)+1)
            while(engage === 'r'){
                if (chance !== 1){
                    player.hp = player.hp - enemyAtk
                    engage = readline.keyIn(`You attempt to swim away, but ` + foeName +  ` attacks dealing ` + enemyAtk + ' points of damage to you. \n'+ `Your current HP is ` + player.hp + ` and ` + foeName + `'s current HP is ` + foeHp + `. \n (a) Attack or (r) Swim away? `,{limit:'$<a,r>'})
                    if (engage === 'a'){
                        attack()
                        engage='r'
                    }
                    readline.keyInPause('Whew. You managed to escape safely')
                    engage = ''
                }
            }
        };

        while( player.hp > 0){
            // console.clear()
            swim()
         }

        while(player.hp <= 0){
            loss()
        }

         function loss(){
            console.log("You are in the loss function")
            // console.clear()
            readline.keyInPause("Sad day, you've been eaten. \n You died and more importantly, \n you lost the game.")
            process.exit()
         }