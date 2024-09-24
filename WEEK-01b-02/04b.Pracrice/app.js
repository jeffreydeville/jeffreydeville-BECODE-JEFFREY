/* console.log("I am in the console");
let myName = "JEFFREY";
console.log(myName);
alert(myName);
let exchangeRate = 0.93;
console.log(50 * exchangeRate);
console.log(132 * exchangeRate);
exchangeRate = 0.91;*/
console.log("Practice 04b!!!!!!!!!!!!!!!!!!");
let a = 3;
let b = 8;
let c = a + b;
b= c%5 ;

console.log("c is " + c);
console.log("b is " + b);


const myString = "I am a super hero!";

console.log(myString.length);
// result 18 
const myString1 = "Hello, World!";

myString1[0]; // Result : "H"
myString1[1]; // Result : "e"

const Visitor ="N957324";
console.log(Visitor.length);
Visitor[0];

const Name = "Henrique";

Name.slice(3, 6); // Returns : "riq"

const bankAccount = "BE_954364";

bankAccount.replace("_", ""); // returns BE9554364  remplace tous les _ par ""

const user = "Henrique";

let age = 35;

const greeting = `Hello, ${user} ! You are ${age} years old.`;//nstead of a quote or double quote, use backticks to contain your text ``

console.log(greeting); // Prints "Hello, Henrique ! You are 35 years old.

console.log("Practrice 06b!!!!");
// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
const whisper = message.trim().toLowerCase(); //.trim() move space from both side. toLowerCase() put all in lowercase.

// DON'T TOUCH THIS LINE! (please)
let word = "Dumbledore"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let lastLetter = word[word.length - 1];
console.log(lastLetter);

// DON'T TOUCH THIS LINE! (please)
const word2 = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
const cut= word2.slice(5); // Slicing from index 5 to the end
const facialHair = cut.replace("o", "e");
console.log(facialHair);



                                    //NUMBERRRRRRRR

let x = Math.floor(Math.random() * 10);// Math AVEC UNE MAJUSCULE!!!!!!!!!!
console.log(x);


let y =(Math.random()*4 +1 );// Math AVEC UNE MAJUSCULE!!!!!!!!!!
console.log(y);



let myNumber = 5.379453;

myNumber=myNumber.toFixed(1); // Returns 5.37 Metode differente pour ajuster la virgule ou on veut.
console.log(myNumber);


let numbe = "4.786";

parseFloat(numbe); // Returns 4.786 (the number, not the string)

// ParseInt

parseInt(numbe); // Returns 4

let num = 54;

num.toString(); // Returns "54" (the string, not the number)


num += 1; //same then num = num +1;

let myNum = 0;

myNum += 4;

myNum -= 2;

myNum /= 2;

myNum *= 10;


console.log("exercise 0.8!!!!!!!!!!!!!")

/*const username = prompt("What is your name?");
const userAge = prompt("what is uor age?");
const userLocation=prompt("where do u live?");

alert(`Welcome ${username} ${userAge} ${userLocation} !`);*/


/*let price = Math.floor(Math.random()*100);
console.log(price);
price=price+(price*0.21);
console.log("the prcie with tva is "+price+"$");

const PI = 3.14;
let Radius= Math.floor(Math.random()*10);
const cercle=Radius*Radius*PI;
console.log("Le perimetre du cercle est "+cercle+"cm");*/

/*const number1= prompt("first number");
const number2= prompt("second number");
let answer= number1 + number2;
console.log("addition= "+answer);
answer = number1-number2;
console.log("soustraction= "+answer);
answer = number1/number2;
console.logc("division= "+answer);*/


//--------------------------------------------------------------------------------------------------------
//                                    CONDITION!!!!!!!!!!!!!!

/*true && true; // returns true

true && false; // returns false

false && false; // returns false

true || false; // returns true (because we demanded that at least one of them was true)

!true; // returns false (because we are saying that we want the opposite of the original value)*/

/*if (boolean) {
    // run this code
  } else if (boolean) {
    // run this code
  } else {
    // run this code
  }

  switch(z){

    case x:console.log("");
    case y:console.log("");
  }*/

  /*const Nameuser=prompt("What is your name");
  const preferAnimal=prompt("which do you prefer, cats or dogs ?");
  if (preferAnimal=="cats"){alert("miaou")} 
  else if(preferAnimal=="dogs") {alert("waff")}

  const mystery = "Patroui7"*;*/ //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
/*if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
}*/
/*alert("repondre question pour demarrer");
const ageconducteur = prompt("quel est vortre age?");
if(ageconducteur<18){alert("Sorry, you are too young to drive this car. Powering off")}
else if(ageconducteur>18){alert("Powering On. Enjoy the ride!")}
else if (ageconducteur==18){alert("Congratulations on your first year of driving. Enjoy the ride!")}*/

//---------------------------------------------------------------------------------------------------------
                                    //ARRAY!!!!!!!!!!!!

// To make an empty array
/*const students = [];

// An array of strings
const colors = ["orange", "red", "yellow"];

// An array of numbers
const lottoNumbers = [19, 22, 56, 12, 51];

// A mixed array
const stuff = [true, 68, "cat", null];
//-----------------------------------------------------------------------------------------------------

planets.shift();                                //remove the first index of index
array.push()                                   //add array index () at the end of the array
array.unshift()                                //add array index () at the beginning of the array
//--------------------------------------------------------------------------------------------------------



const colors = ["orange", "red", "yellow"];

colors[0]; // returns "orange"
colors[1]; // returns "red"
colors[2]; // returns "yellow"

colors[3]; // returns undefined (it doesn't exist)
colors[3] = "purple";

// now, "colors" is :

["orange", "red", "yellow", "purple"];

// you can also change a value reassigning it :

colors[1] = "I'am a new value";

// now, "colors" is :

["orange", "I'am a new value", "yellow", "purple"];

// We substituted "red" by "I'am a new value"*/

/*const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

leaderboard[1] = "LUNA"; //DON'T TOUCH THIS LINE!
leaderboard[3] = "Dracao";
console.log(leaderboard);

const initialArray = [null,true,["Apple", "two", undefined],false,["three", "BeCode"],4,"I am a big bad wolf",["one"], ];
const reponse =[initialArray[7][0],initialArray[2][1],initialArray[4][0]];
console.log(reponse);*/

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE! 

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);

//------------------------------Important------------------------------------------
/*
let exclTax;
while (isNaN(parseFloat(exclTax))) {
    exclTax = parseFloat(prompt("What's the price exclusive of taxe?"))     le code permet de forcer lutilisateur de mettre un nombre si il
*                                                                            mets un string la boucle repose la question
};

let tax = 0.21;
let inclTax = exclTax + exclTax*tax;

alert(`This is your price with inclusive tax of ${tax} : ${inclTax.toFixed(2)}`);
parseInt(myString))

.toLowerCase().trim():"" a la fin dun prompre hors de la paranthese par exemple pour que tout se que lutilisateur a ecrit soit en mininscure(lowercase) 
.                         et de suprimer les eleement demander ici ""donc les espace

let fullName = nom + " " + prenom.charAt(prenom.length - 1); le charAT va prendre la derniere lettre grasse au length-1 et la lire directement.

*/
//------------------------------Object-------------------------------------------------
const product={
  name:"iPhone 15",
  inStock: true,
  price:1249.90,
  includedInPackage:["case", "earphones", "charger"],
};

console.log(product.includedInPackage[1]);

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
 };
  //restaurant.prix=55$ RAJOUTER UN VALEUR DANS RESTAURANT 

//-----------------------------------------loop----------------------------------------------------------
//YOUR CODE GOES DOWN HERE:
/* const fullAddress=`${restaurant.address} ,${restaurant.city},${restaurant.state} ${restaurant.zipcode}`
console.log(fullAddress);
                         >>>>>>>>>>>>>>>>>>for<<<<<<<<<<<<<<<<<<<

for (let i=2 ; i <= 20 ; i+=2 ) {
  console.log(i);
}
for (let i=1 ; i <= 20 ; i+=2 ) {
  console.log(i);
}
for (let i=100 ; i >= 1 ; i-=10 ) {
  console.log(i);
}
for (let i=25 ; i >= 0 ; i-=5 ) {
  console.log(i);
}
for (let i=10 ; i <= 1000 ; i*=10 ) {
  console.log(i);
}

const colors = ["blue", "red", "violet", "yellow"];
for(let i= 0;i < colors.length;i++ ){
  console.log(colors[i]);
}
 
const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
for (let i=0;i<animals.length;i++){
  console.log(animals[i]);
}
const users = [
  {
    firstName: "Vito",
    lastName: "Corleone",
  },
  {
    firstName: "William",
    lastName: "Wallace",
  },
  {
    firstName: "Harry",
    lastName: "Potter",
  },
  {
    firstName: "Amadeus",
    lastName: "Mozart",
  },
  {
    firstName: "Barack",
    lastName: "Obama",
  },
];
for(let i=0;i< users.length ;i++){
  console.log("My full name is "+users[i].firstName + " " + users[i].lastName);
}
const seatingChart = [
  ["Colas", "Benoit", "Elodie"],
  ["Sola", "Irina", "Antonino", "Eli"],
  ["John", "Maryna", "Naike", "Fabrice"],
];

// I can use nested loops to do that :

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
  console.log(`ROW #${i+1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}*/

/* const secretWord = "Hopper";

let guess;

while (guess !== secretWord) {
  guess = prompt("enter the secret code...");
}

alert("Congratulations! You got the secret code !"); */
//break;         <= It basically tells the loop to stop no matter what is happening.


//---------------------exo 18 jeux chiffre devinette----------------------------------------

/*let conteur=1;
let MaxNumber=prompt("entrer a max number");
while (isNaN(parseFloat(MaxNumber))){
  alert("Please enter a valid number");
  MaxNumber=prompt("entrer a max number");
};
MaxNumber=MaxNumber;
let nombre=Math.floor(Math.random()*MaxNumber+1);
console.log(nombre);
let guess=prompt("devine le nombre entre 1 et "+MaxNumber);
if (guess!=nombre) {
  while(guess!=nombre){guess=prompt("devine le nombre entre 1 et "+MaxNumber);
    conteur=conteur+1;
  };
  console.log("Congratulation!");
  console.log(`U try ${conteur} time!!`);;
} else {
  console.log("Congratulation!");
  console.log("U try 1 time!!");
}*/

//---------------------------for of---------------------------------------------------------

/* const colors = ["red", "orange", "blue", "violet"];

for (let item of colors) {
  console.log(item);
} */
// For both, the result will be
/*"red"
"orange"
"blue"
"violet"
*/

//---------------------------for in-------------------------------------------------------------
/* const user0 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["football", "movies", "guitar"],
};

for (let key in user0) {
  console.log(`${key} : ${user0[key]}`);
} */
/*firstName : John
lastName : Doe
age : 30
hobbies : ["football", "movies", "guitar"]
*/

//--------------------------------------EXO 20TODO LIST--------------------------------------------(a revoir)
/* let TodoList=["go out with the dog","go to the grosserie","work"];
let newaction;
let newlist="";//pour le preparere a enregistrer des string
let action=prompt("-'new'to add a todolist \n -'list'to see all the todosdelete \n -'delete'to remove a specific todo\n -'quit'to exit de program").toLowerCase().trim();


 while(action!=="quit"){
    if (action==="new") { 
      
      newlist="";
     TodoList.push(newaction=prompt("numero dans la liste: "+(TodoList.length+1)+"\nquel chose voulez vous rajouter a la liste")); 
     for (let i=0;i<TodoList.length;i++){
     newlist+=i+1+TodoList[i];//enregistre la valeur lune a la suite de lautre 
      }                       //let str="exemple" + "2.exemple2"
                              //let str= "exemple";
                              //str+= "2.exemple2";
     alert(newlist);
    
   }else if(action==="list"){
    newlist="";
    for (let i=0;i<TodoList.length;i++){
      newlist+=i+1+TodoList[i];
    }
      alert(newlist);
   }else if(action =="delete"){
       let suprimer = prompt("quel numero voulez vous sup ?\n"+TodoList).toLowerCase().trim();     //join permet de de 
      TodoList.splice(suprimer-1);
     } 
    else {
       alert("L'élément '" + suprimer + "' n'existe pas dans la liste.");
     }
     action=prompt("-'new'to add a todolist \n -'list'to see all the todosdelete \n -'delete'to remove a specific todo\n -'quit'to exit de program").toLowerCase().trim();
 } */

//-------------------------------------------------EXO 21 function-------------------------------------------------------------
/* function rollDice(){
  let i=0
  let random=Math.floor(Math.random()*6+1)
  console.log("Die "+(i+1)+": "+random);
}
rollDice();
rollDice();                                      fucntion avec un math random et floor qui corespond a un De
rollDice();
rollDice();
rollDice(); */
/* function repeat(string, times){
  let result="";
  for(let i=1;i<times;i++){
    result+=string;                       function qui boucle un string que on lui donne avec le nombre de fois qu'on lui dis quand on lappele 
  }
    console.log(result)
}
repeat("le",5); */

/* function greet(prenom,nom){
  let fullName=nom+"."+prenom[0];
  console.log(fullName)
}

greet("jean","pierre"); */

/* function weather(temp){
  if (temp>=24){
    return true;
  }
  else {return false;                             function qui return false or true

  }
}
console.log(weather(20))
console.log(weather(26)) */

function lastElement(ffff) {
    console.log(ffff); // Log the array before any return statements
    if (ffff.length === 0) {
        return null; // Return null if the array is empty
    } else {
        return ffff[ffff.length - 1]; // Return the last element
    }
}


console.log(lastElement([3, 5, 7])); // Logs: [3, 5, 7] and Output: 7
console.log(lastElement([1]));       // Logs: [1] and Output: 1
console.log(lastElement([]));        // Logs: [] and Output: null

function capitalize(word) {
  
  return word.charAt(0).toUpperCase() + word.slice(1);  //chart je selectionne la lettre que je veux puis je lamet en maj
}
console.log(capitalize("eggplant")); // "Eggplant"
console.log(capitalize("pamplemousse")); // "Pamplemousse"
console.log(capitalize("squid")); //"Squid"

function sumArray(array) {
  let add = 0; 
  for (let i = 0; i < array.length; i++) {
      add += array[i]; 
      console.log(add)
  }
  return add; // Return the total sum
 
}
sumArray([1, 2, 3]); // 6
sumArray([2, 2, 2, 2]); // 8
sumArray([50, 50, 1]); // 101

function returnDay(number) {
  // Array of days where index 0 corresponds to Monday (1)
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Check if the number is valid (1-7)
  if (number < 1 || number > 7) {
      return null; // Return null for invalid input
  }

  // Return the corresponding day (subtract 1 to match array index)
  return days[number - 1];
  
}
/* console.log(returnDay(1)); // "Monday"

const User={
firstname:"pas",
lastname:"ouf",
age:8,
printAge: function(){
  console.log(this.firstname+" "+this.lastname+" "+this.age)
},
aYearHasPast:function(){
this.age+= 1;
console.log(this.age);
},
}
User.printAge();
User.aYearHasPast();
User.aYearHasPast(); */


/* const myFunc = function () {
  // code                   <<<<<<<<<<<<<<<<<<<<<  comment faire une arrow function   >>>>>>>>>>>>>>>>>>>>>>>>
};

const myFunc = () => {
  // code
};

function addOne(num) {
  return num + 1;
}

const addOne = (num) => {
  return num + 1;
};

const addOne = (num) => num + 1; */
