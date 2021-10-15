
let inquierer = require('inquirer');
var colors = require('colors');

let animal
function gameOver(){
    console.log(`            G A M E  O V E R            `.underline.red)
    console.log(`\n\n           Stairs to heaven\n\n`.red)
        console.log("                  |     ".red)
        console.log("               ---|---  ".red)
        console.log("                  |     ".red)
        console.log("                  |     ".red)
        console.log("                  |     ".red)
        console.log('                  |     '.red)
        
}

let firstQuestions = [
    {
        type:'rawlist',
        name: 'type',
        message: "What kind of pet do you want to choose?\n\n",
        choices: ['Cat', 'Dog','Bunny'],
        default:'Dog'

        },
        {
        type: 'input',
        name: 'name',
        message:'What name you want to choose?\n\n',
        validate: (answer)=>{
            if(answer ===''){
                return `Please enter pet name`
            }
            return true
            
        }

        },
];

let choices = [
    {
        type : 'rawlist',
        name : 'choice',
        message : 'What we gonna do now?\n\n',
        choices : ['Give food', 'Give drink','Lets play','Screatch on head','Take a walk','Sleep'],
    },
];
let game = () => {
    if (animal._hunger <= 0 || animal._energyLevel<= 0|| animal._thirst <= 0
        || animal._hunger > 20|| animal._thirst > 20 ){
        gameOver()
        }
inquierer
    .prompt(choices)
    .then((answers) =>{
        if(answers.choice === 'Give food'){
            animal.eat()
        }else if(answers.choice === 'Give drink'){
            animal.drink()
        }else if(answers.choice === 'Lets play'){
            animal.play()
        }else if(answers.choice === 'Screatch on head'){
            animal.headScratch()
        }else if(answers.choice === 'Take a walk'){
            animal.walk()
        }else if(answers.choice === 'Sleep'){
            animal.sleep()
        }
        })
        .then(() => game ());
    };

const first = () => {
    inquierer
    .prompt(firstQuestions)
    .then((answers) =>{
        if(answers.type === 'Cat'){
            animal = new Cat(answers.name)
        
        }else if(answers.type === 'Dog'){
            animal = new Dog(answers.name)
        }else if((answers.type === 'Bunny')){
            animal = new Bunny(answers.name)
        }
        console.log(`\n\n Hi there! I am  ${answers.name} sueeeper ${answers.type} !\n\n Im really unique, so take good care of me...\n\n otherwise I will piss in your shoes everyday...\n\nI dont joke :)\n\n`.underline.magenta) 
    })
    .then(()=>game())
}
first()



        
class Animal{
    constructor(name){
        this._name = name;
        this._happiness = 5;
        this._hunger = 6;
        this._thirst = 6; 
        this._energyLevel = 10;
        this._bladder = 2;
        this._sleep = 5;
    
    }
    get name(){
        this._name;
    }
    
    get happiness(){
        this._happiness;
    }
    
    get hunger(){
        this._hunger;
}
    
    get thirst(){
        this._thirst;
    }
    
    get energyLevel(){
        this._energyLevel;
    }
    
    get bladder(){
        this._bladder;
    }
    
    get sleep(){
        this._sleep;
    }
    
    eat(){
        this._hunger ++; 
        this._happiness ++;
        this._energyLevel ++;
        this._bladder ++;
        console.log('\n\nMniami...I love this food'.underline.magenta)
        if(this._hunger >= 9){
            console.log("\n\nHey dude! I can not eat more..".underline.magenta)
        }else if (this._hunger > 6){
            console.log("\n\nNow we can play :)".underline.magenta)
        }
        return console.log((`\n\nHunger meter: ${this._hunger}\nThirst meter: ${this._thirst} \nHappiness meter: ${this._happiness} \nBladder meter: ${this._bladder} \nEnergy meter: ${this._energyLevel} \nSleep meter: ${this._sleep}\n\n`.cyan))

    }
    drink(){
        this._thirst ++; 
        this._happiness ++;
        this._bladder ++;
        this._energyLevel ++;
        if(this._thirst >= 8){
        console.log("\n\nHey dude!... I can not drink more..".underline.magenta)
        }else if((this._bladder >= 6)){
            console.log("\n\nMy bladder is full, let's have a walk!".underline.magenta);
        }
        return console.log((`\n\nHunger meter: ${this._hunger}\nThirst meter: ${this._thirst} \nHappiness meter: ${this._happiness} \nBladder meter: ${this._bladder} \nEnergy meter: ${this._energyLevel} \nSleep meter: ${this._sleep}\n\n`.cyan))}
    
    headScratch(){
        this._happiness ++;
        this._energyLevel ++;
        console.log("\n\nI like it :)".underline.magenta)
        setTimeout(() => {
            console.log("\n\nN no don't stop..".underline.magenta);
        }, 500);
        return console.log((`\n\nHunger meter: ${this._hunger}\nThirst meter: ${this._thirst} \nHappiness meter: ${this._happiness} \nBladder meter: ${this._bladder} \nEnergy meter: ${this._energyLevel} \nSleep meter: ${this._sleep}\n\n`.cyan))
    }

    play(){
        this._energyLevel --;
        this._hunger --;
        this._thirst --;
        this._sleep ++;;
        if(this._energyLevel <= 4){
            console.log("\n\nOh I am tired now...".underline.magenta)
        } else if (this._thirst <= 3 || this._hunger <= 3){
            console.log("\n\nOh I am so hungry and thirsty...".underline.magenta)
        }else if(this._sleep > 10 ){
            console.log("\n\nI need to take rest...\n\n".underline.magenta)
        }
        return console.log((`\n\nHunger meter: ${this._hunger}\nThirst meter: ${this._thirst} \nHappiness meter: ${this._happiness} \nBladder meter: ${this._bladder} \nEnergy meter: ${this._energyLevel} \nSleep meter: ${this._sleep}\n\n`.cyan))
    }
    walk(){
        this._bladder --;
        this._hunger --;
        this._thirst --;
        this._energyLevel --;
        this._sleep ++;
        if(this._energyLevel <= 3 || this._sleep > 5){
            console.log("\n\nOh..now  I am tired and sleepy".underline.magenta)
        } else if (this._thirst <= 3 || this.this._hunger <= 3){
            console.log("\n\nOh I am so hungry and thirsty...".underline.magenta)
        }
        return console.log((`\n\nHunger meter: ${this._hunger}\nThirst meter: ${this._thirst} \nHappiness meter: ${this._happiness} \nBladder meter: ${this._bladder} \nEnergy meter: ${this._energyLevel} \nSleep meter: ${this._sleep}\n\n`.cyan))
    }
    sleep(){
        this._bladder --;
        this._hunger --;
        // this._thirst --;
        this._energyLevel ++;
        this._sleep --;
        console.log("  Z   ")
        console.log("    z   ")
        console.log("  Z     ")
        console.log("    z   ")
        console.log("  Z    ")
        console.log("    (..)   ")
    }
    
    }
    
        

    

class Dog extends Animal{
    constructor(name){
        super(name)
        
    }
    
}

class Cat extends Animal{
    constructor(name){
        super(name)
    
    }
    

    }
    class Bunny extends Animal{
        constructor(name){
            super(name)

}

}
