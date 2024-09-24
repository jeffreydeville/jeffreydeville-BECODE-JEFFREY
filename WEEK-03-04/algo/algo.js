const exo00 =function(a,b){
    if (a==10 || b==10 || a+b==10){
        return true;
    }
    return false;
};
console.log(exo00(3,7));
console.log(exo00(3,5));
console.log(exo00(3,10));




const exo01 =function(c){
    days=c*364;
    console.log(days);
    return;
};
console.log(exo01(4));




const exo02 = function(a){
    if(a>=1 && a<=1000){
        total=0
        for(i=0;i<=a;i++){
            
            total+=i;
            
        }
        
        console.log(total);
    }
    return false;
}
console.log(exo02(8));




function exo03(arr) {
    max = arr[0];
    min = arr[0];
    for ( i = 0; i < arr.length; i++) {
        if ( arr[i] > max )
        {
            max = arr[i]
        }
        if ( arr[i] < min )
        {
            min = arr[i]
        }
    }    
    return [min,max]
    
}
console.log(exo03([3, 10, -1, 4, 5]));





function exo04(word){
cacher=[];
match="";
Minuscule =/[a-z]/g;// le 'g' veut dire que le code ne sarrete pas apres avoir trouver une lettre 

while((match = Minuscule.exec(word))!==null){
    cacher.push(match[0]);
}
return cacher.join('');//.join('') est pour lier les lettre trouver 
}
console.log(exo04("UcUNFYGaFYFYGtNUH"));




function exo05(drinks){
    return drinks.sort((a,b)=> a.price - b.price);
}

const drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
    ];

console.log(exo05(drinks))
//sortie
/* {name: 'water', price: 3}
1
: 
{name: 'coke', price: 8}
2
: 
{name: 'lemonade', price: 10}
3
: 
{name: 'lime', price: 10}
4
: 
{name: 'vodka', price: 17} */
function exo06(chickens,cown,pigs){
    
    chickens=chickens*2;
    cown=cown*4;
    pigs=pigs*4;
    legs=(chickens+cown+pigs);
    return legs;
}
console.log(exo06(2,3,5));//36



function exo07(prob,prize,pay){
    if(prob*prize>pay){
return true;
    }
    return false;
}
console.log(exo07(0.9,1,2));




function exo08(frames,sec){
return frames *(sec*60);
}
console.log(exo08(10,25))



function exo09(gasoil){
    if(gasoil<10){
        return gasoil=100
    }
    return gasoil*=10;
}
console.log(exo09(25));
//----------------------------------------algo serie 2-------------------------------
function exo10(array){
    let count = 0;
    if ( array.length == 0){
        return 0
    }
    for (let i = 0; i <array.length; i++) {
        if ( array[i] === true) {
        count ++;
    
        }
    }
    return count
}
console.log(exo10([true, true, false, true, false]));



function exo11(you,other){
    if(you<other && you+6>other){
        return true
    }
    return false
}
console.log(exo11(3,7));
console.log(exo11(1,9));
console.log(exo11(5,3));



function exo12(nombre){
    if(nombre>0){
    return console.log(String(nombre).length)// string pour dire que tu veux un valeur dun nombre
    }
    return 0
}
console.log(exo12(56));



function exo13(object){

    return resultat = Object.entries(object); //transformer un object en pair d'array
}
console.log(exo13({ a: 1, b: 2 }));



function exo14(nombre,multi){
    taille=multi;
    for (let i=1;i<=taille;i++){
    resultat=nombre*i;
    console.log(`${nombre} x ${i} = ${resultat}`); // Afficher le calcul
    }  
} 
exo14(7,5);


function exo15(n){
    n = n.replace(/^0+(?!$)/, ''); // enleve les 0 devant et mets un vide

    if (n.includes('.')) { 
        n = n.replace(/0+$/, ''); // enleve les 0 de deriere si y une virgule
        n = n.replace(/\.$/, '');  // si plus rien deriere virgule on enleve virgule
    }

    if (n === '.') {
        return '0';
    }

    return n;
}

console.log(exo15("0684684.500"));


function exo16(arr) {
    // Sort the array using the sort() method
    return arr.sort((a, b) => {
        // Retrieve the value from the element
        const valueA = Array.isArray(a) ? a[0] : a;
        const valueB = Array.isArray(b) ? b[0] : b;

        
        return valueA - valueB; //va comparer et mettre du plus petit au plus grand.
    });
}


console.log(exo16([4, 1, 3]));     
console.log(exo16([[4], [1], [3]]));   
console.log(exo16([4, [1], 3]));       




function exo17(nombre1,type,nombre2){
    let result;
    switch(type){
    case "+": result=nombre1+nombre2;
    break;
    case "-": result=nombre1-nombre2;
    break;
    case "*": result=nombre1*nombre2;
    break;
    case"/":  if(nombre1==0||nombre2==0){return "u cant div buy 0"}
    resultnombre1/nombre2;
    break;
    default:return"operation non valide";
    
    }
    return result;
}
console.log(exo17(2,"+",3));




function exo18(country,km){
total = 148940000;
pourcentage=100*(km/total);
pourcentage=parseFloat(pourcentage.toFixed(2));
console.log(country+"="+pourcentage+"%")
}
exo18('italy',17098242);


function exo19(text) {
    return text
        .trim() // Remplace
        .split(/\s+/) // separe le teste par mot pour pouvoir les bouger et/ou midifier a ta guisse (en plus deter obligatoire sinon ero system)
        .reverse() // inverse le sens
        .join(' '); //remet les mot qui sont acctuellement separere a cause du split en une pgrase
}
console.log(exo19("the sky is blue"));


//---------------------------algo serie 3-----------------------------------------------


function exo20(nombre){
    somme=0;
    valeurs=nombre.toString().split('').map(Number); //separe tout les caractere
    console.log(valeurs);
    for (let i=0;i<valeurs.length;i++){
        somme+=+valeurs[i];
    }
    console.log(somme);
}
exo20("25658");


function exo21(groceries) {
    let total = 0;

    // Loop a travers tout les object de grocerie
    for (const sousCategoreieDegrocerie of groceries) {
        
        total += sousCategoreieDegrocerie.quantity * sousCategoreieDegrocerie.price;
    }

    return total; 
}


console.log(exo21([{ product: "Milk", quantity: 1, price: 1.50 },
    { product: "eeee", quantity: 5, price: 50 }
])) 




/* function exo22(words){
    let result = words.split(" ")// A déconstruction
for (i=0; i < result.length ; i++) 
{
    if (result[i].length % 2 !==0){ // c'est la longeur du mots de l'index qu'on veut tester 
        result[i] = result[i].split("").reverse().join("") // b deconstruction et reconstruction
    } else result = result
}

return result.join(" ")// A reconstruit
}

console.log(exo22("One two three four"))
 */





function exo23(arr){
    let array=arr.split(' ')
    let result=true;
    array.forEach((word,index)  => {
        if (array.indexOf(word)<array.length-1 && word[word.length-1]== array[index+1][0]){
            result=result && true
        }else if(array.indexOf(word)!=array.length-1 ){
            result=result && false
        }
    });
    return result;
}
console.log(exo23("Marta appreciated deep perpendicular right trapezoids"));


function exo24(NOMBRE){
    let result="there is no 7 in the array";
    let ray=String(NOMBRE).split("");
        for(let i=0;i<ray.length;i++){
        if(ray[i]=='7'){
        result="bomm!"
        
        }
        else if(result != true){}
}
return result
}
console.log(exo24([4,25,2,8,45])); 


function exo25(temp){
    
    let result;
    switch (temp[temp.length-1]){
        case 'C':
        temperature=Math.floor(parseFloat(temp));
        result =`${(temperature * (9 / 5)) + 32}°F`
        break;
        
        
        case 'F':temperature=Math.floor(parseFloat(temp));
        (temp*(9/5))+32;
        result=(`${(temperature - 32) * (5 / 9)}°C`);
        break;
        

        default: result= "ERRO";
        break;
    }
    return result
}
console.log(exo25("50°F"))

function exo26(correct,faux){
        let unique=[];
        let result="";
    for (let i=0;i<correct.length;i++){
        if (correct[i]==faux[i]){
            if (!result.includes(correct[i])){
            result+=correct[i]
            unique.push(correct[i]);
            }
        }
        
    }
    console.log(result);
}
exo26("azpaip","appeizrp");

//<><><><><><><><><><><><><><><><>ADVANCE<><><><><><><><><><><><><><><><><><><><><><>


function EXO1(nombre){
    let i=1;
    do {
        if(i%3==0&&i%5==0){
            console.log(`FizzBuzz`)
        } 
        else if(i%5==0){
            console.log(`Buzz`)
        }
        else if(i%3==0){
            console.log(`Fizz`)
        }
        else{console.log(i);}
        i++;
        
    } while (i<=nombre);
}
EXO1(20)