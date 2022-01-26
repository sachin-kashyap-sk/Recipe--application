/*//////////////////////////////////    strict- function   /////////////////////////////////////////////////////////////////////*/

/*
'use strict'
const skHaveTheLicense = true;
const PassTest = false; 
if (skHaveTheLicense){
     console.log(" Sk Can drive ");
}
*/



/*//////////////////////////////////////////////// function///////////////////////////////////////////////////////////////////////*/



/*
function FruitProcess(Apple,Orange){
    const juice =`juice with ${Apple} Apple and ${Orange} Orange`;
    return juice 
}
const  AppleJuice = FruitProcess ("5","0" )
console.log(AppleJuice);
const OrangeJuice = FruitProcess("5","10")
console.log(OrangeJuice);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function collectionOfBags(Zara,Gucci){
    const Bags = `My Collection OF Zara ${Zara}, And Gucci ${Gucci} Bags` ;
    return Bags ;
}
const ZaraBags = collectionOfBags(10,15);
console.log(ZaraBags);




function listOfHouses(HousesInIndia , HousesInOtherCountry){
    const Houses =(`Houses in India ${HousesInIndia} , And Houses In Other Country ${HousesInOtherCountry}`);
    return Houses ;
}

const HousesInIndia=listOfHouses(10,20);
console.log(HousesInIndia);

const HousesInOtherCountry=listOfHouses(50,50);
console.log(HousesInOtherCountry);
*/


/*////////////////////////////////////////function declaration and function expression///////////////////////////////////////////*/



/*
function calcAge(birthYear){
    const age=(2022-birthYear);
    return age ;
}

const age1=calcAge('1998');
console.log(age1);  
*/


/*//////////////////////////////////////////////Expression function /////////////////////////////////////////////////////////////*/


/*
const age2 =function(BirthYear){
    return 2022-BirthYear;
}
const age3 = age2('1998');
console.log(age3); 
*/


/*///////////////////////////////////////////    Arrow function     /////////////////////////////////////////////////////////////*/
/*

const calAge=BirthYear=>2022-BirthYear
const age2=calAge(2000);
console.log(age2);

const calAGE=BirthYear=>2022-BirthYear
const age3=calAGE(1996);
console.log(age3);


const YearUntilRetirement = (BirtHYear,FirstName)=>{
    const age = 2022-BirtHYear;
    const retirement = 60-age ;
    return `${FirstName} , retire in ${retirement} year`;
}
console.log(YearUntilRetirement(1998,'s.k'));
console.log(YearUntilRetirement(1996,'H.k'));

*/


/*/////////////////////////////////////////////function calling other function ///////////////////////////////////////////////*/


/*
function CuttingFruitPieces (fruit){
    return fruit *4 ;
}

function FruitProcess(Apple,Orange){
    const ApplePieces  = CuttingFruitPieces(Apple) ;
    const OrangePieces = CuttingFruitPieces(Orange) ;
    const juice = `juice with ${ApplePieces}  pieces Of Apple and ${OrangePieces} pieces of Orange ` ;
   return juice ;
}
console.log(FruitProcess(3,5));
*/


/*////////////////////////////////////////////     part -2      challenge---1           ////////////////////////////////////////////////////*/

/*
const TeamA = "Dolphins"
const TeamB = "Koalas"

const DolphinsScore = (44,23,71);
const KoalasScore   = (65,54,49);

const AverageScoreOfDolphins = (44+23+71)/3;
const AverageScoreOfKoalas   = (65+54+49)/3;

console.log(AverageScoreOfDolphins ,AverageScoreOfKoalas);


const AverageScore = (`average score of dolphins is ${AverageScoreOfDolphins} , And average score of koalas is ${AverageScoreOfKoalas}`)

console.log(AverageScore); */

/*
 const calAverage = (a,b,c)=>(a+b+c)/3;
 const DolphinsScore = calAverage(100,100,71);
 const KoalasScore   = calAverage(30,30,30) ;

 console.log(DolphinsScore , KoalasScore);

 const CheckWinner = function (avgDolphins , avgKoalas){
     if (avgDolphins >= 2* avgKoalas){
         console.log('Dolphin win the Match ${avgDolphins} vs. ${avgKoalas})');
}else if(avgKoalas>= 2* avgDolphins){
     console.log(`Koalas win the match${avgKoalas} vs. ${avgDolphins})`);
}else console.log('No one win the Match');

 }
 CheckWinner(DolphinsScore,KoalasScore);
 CheckWinner(6000,12000) ; 
 */


/*////////////////////////////////////////////////////////only Practice //////////////////////////////////////////////////////*/

/*
const square = (num) => {
    const temp = num**2
    return temp
}

var result = square(5)
console.log(result)

 const  SquareRoot= (num)=>{
     const temp = num**0.5
     return temp
 }

const squareRoot = (num) => num**0.5;

const result1 = squareRoot(225)
console.log(result1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const calaverage = (a,b,c)=>(a+b+c)/3;

const dolphinsscore = calaverage (44,23,71);
const koalasscore = calaverage (65,54,49);

console.log(dolphinsscore , koalasscore);

const CheckWinner = function(avgdolphins , avgkoalas){
if (avgdolphins >= 2* avgkoalas ){
        console.log(`dolphins win the match  ${avgdolphins} vs. ${avgkoalas} score`);
}else if (avgkoalas >= 2* avgdolphins){
    console.log(`koalas win the match ${avgdolphins} vs. ${avgkoalas} score`);
}else{console.log(`No one win the match`)}
}
    
CheckWinner(dolphinsscore , koalasscore);  
*/


/*////////////////////////////////////////////////// array opertor          /////////////////////////////////////////////////////*/

/*

const friends = [`Ram` , `Sham` , `Mohan` , `sohan`];
console.log(friends);
const number = [1,2,3,4,5];
console.log(number);
console.log(friends[0]);
console.log(friends[2,3]);

console.log(friends .length-2);

friends[2] = `sachin`
console.log(friends);
*/

/*////////////////////// for adding something in the end use .push /// and unshift use add something in front//// /////////*/

/*
friends.push (`Himanshu`)
console.log(friends);

friends .unshift (`Deepu`);
console.log(friends);

/*/////////////////////////////// for remove fist word from array ///////////////////////////////////////////////////////////*/

/*
friends .shift (``);
console.log(friends);

friends .pop (``);
console.log(friends)


/*///////////////////////////////////////  new method in ES6 //////////////////////////////////////////////////////////////*/
/*
console.log(friends .includes ('Ram'));
console.log(friends .includes ('Himanshu')); */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*

const calcTip = function ( bill){
    return   bill<=300 && bill>=50 ? bill * 0.15 : bill * 0.2 ;
}
const bill = [125,555,44] ;
const tips = [calcTip(bill [0]) , calcTip(bill[1]) , calcTip(bill[2])];
 console.log(bill , tips) ;
  
const total = [(bill)[0] + (tips)[0], (bill)[1] + (tips)[1] , (bill)[2] + (tips)[2]];
console.log(total);

*/
/*/////////////////////////////////////////////object ////////////////////////////////////////////////////////////////////////*/
/*
const Sachin  = {
    firstname :  'sachin' ,
    lastname :   'kashyap' ,
    age  :      2022-1998 ,
    job :       'teacher' ,
    friends : [ 'Ram', 'sham' , 'Mohan'],
}
    console.log(Sachin.friends);
    console.log(Sachin .firstname);
    console.log(Sachin.age);
    console.log(Sachin);
    console.log(Sachin['job']);
    console.log(Sachin['lastname']);

/*const interestedin = prompt('what do you want to know about sachin , firstname , lastname , job ') ;
    console.log(interestedin);

if (interestedin){
    console.log(interestedin);
}else{
    console.log('you select the wrong option') ;
} */
/*
Sachin.location = 'India' ;
Sachin['facebook'] = 'sachingolu1998@gmail.com' ;
console.log(Sachin);

/*///////////////////// sachin has 3friends but his best friend is Ram */
/*console.log(`${Sachin.firstname} has ${Sachin.friends.length} friends but his best friend is ${Sachin.friends[0]}`); */

/*

const sachin  = {
    firstname :   'sachin' ,
    lastname  :   'kashyap',
    birthyear :    1998    ,
    job       :   'teacher',
    friends   :  ['Ram', 'sham' , 'Mohan'],

    
        calcage: function (){
        this.age = 2022 - this.birthyear ;
        return this.age ;
        },
     
        getsummary : function () {
        return(`${this.firstname} is a ${this.age} - year old ${this.job}`);
}
};
        console.log(sachin.getsummary()); 
*/
/*

const Mark = {
    FullName :"MarkMiller" ,
    Mass   :  78 ,
    Height : 1.69,

    calcBMI : function( ){
    this.bmi = this.Mass / this.Height ** 2;   
    return this.bmi ;
}
};
const John = {
    FullName : "JohnSmith" ,
    Height : 1.95 ,
    Mass   : 92 ,

    calcBMI : function( ){
    this.bmi = this.Mass / (this.Height * this.Height)  }
};
    Mark.calcBMI();
    console.log(Mark.bmi);

    John.calcBMI();
    console.log(John.bmi);

    console.log(`${Mark.FullName} Has The Higher BMI Than ${John.FullName} BMI`);
*/


/*////////////////////////////////////////////////object practice ///////////////////////////////////////////////////////////////*/
/*
const ram = {
    firstname :   'ram', 
    lastname:   'kumar', 
    birthyear:    1998 ,
    friends:  ['mohan' , 'sham'] ,
};
    console.log(ram.lastname);
    console.log(ram.firstname);
    console.log(ram.friends);

    const rohan = {
        firstname :   'rohan', 
        lastname:   'kumar', 
        birthyear:    1998 ,
        friends:  ['mohan' , 'sham'] ,

        calcage : function( ){
            this.age = 2022 - this.birthyear ;
        return this.age ;
        },
        getsummary :function( ){
            return (`i am ${this.firstname} ${this.lastname} and my age is ${this.age} and i have ${rohan.friends.length} friends`);

        
        }
        };

        console.log(rohan.calcage());
        console.log(rohan['firstname']);

        console.log(rohan.getsummary()); */


/*///////////////////////////////////////////////        Loop ///////////////////////////////////////////////////////////////////*/


/* lifting the weight in repetition */
/*
for (let rep = 1; rep<=3; rep++){
    console.log(`Lifting The Weight in ${rep}` );
}        
*/

/*////////////////  /////////////////calculate age while using array with loop function////////////////////////////////////////////*/

/*
const year = [1998,2000,2002,2004] ;
const ages = [];

for(let i = 0 ; i < year.length ; i++ ){
    ages.push(2022 - year[i]);
}
console.log(ages);
*/

/*///////////////////////////////////// loop with continue and break function /////////////////////////////////////////////////////*/
/*

const ram = [
           'ram', 
           'kumar', 
            1998 ,
            ['mohan' , 'sham'] ,
];

console.log('----only string----');

for(let i = 0 ; i < ram ; i++){
    if(typeof ram[i] !=='string' ) continue ;
}


console.log(ram[i], typeof ram[i]);

*

const rohan = [
    'rohan', 
    'kumar', 
     1998 ,
     ['mohan' , 'sham'] ,
];
    console.log('----------only number -----');

for(let i = 0 ; i < rohan ; i++){
    if(typeof rohan[i] ==='number') break;
}
console.log(rohan[i],typeof rohan[i]);
*/

/*/////////////////////////////////////////Looping backward ////////////////////////////////////////////////////////////////////*/


const ram = [
             'ram', 
             'kumar', 
             1998 ,
             ['mohan' , 'sham'] ,
];

for(let i=ram.length-1 ; i >= 0 ; i--){
        console.log(i,ram[i]);
}

const sham = [
    'sham',
    'kumar',
     2020,
     ['sachin' ,'kashyap'],
];

for(let i = sham.length-1 ; i >= 0 ; i--){
    console.log(i,sham[i]);
}

/*//////////////////////////////////////////    Loop in Loop     /////////////////////////////////////////////////////////////////*/

for(let exercise = 1; exercise <4 ; exercise++){
    console.log(`-----starting exercise-----${exercise}`);

for (let rep= 1; rep< 6 ; rep++){
    console.log(`-----lifting weight-----${rep}`);
}
};


/*///////////////////////////////////////////  while loop   ////////////////////////////////////////////////////////////////////*/

let rep = 1
while (rep<=6){
    console.log(`lifting the weight repitition ${rep}`);
rep++ ;
}

const calcTip = function (bill){
return  bill<=300 && bill>=50 ? bill * 0.15 : bill * 0.2;
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const  tips = [] ;
const totals = [] ;

for (let i= 0; i < bill.length ; i++ ){
    const tip = calcTip (bill[i]);
    tips.push(tip);
    totals.push(tip + bill[i]);
};
console.log(bill, tips, totals);


































