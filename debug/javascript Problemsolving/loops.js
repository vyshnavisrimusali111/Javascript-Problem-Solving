let isLoggedIn = true;
let isAuthorized = true;
if (isLoggedIn){
    if (isAuthorized) {
        console.log("Access granted");
    }else{
        console.log("Access denied");
    }
}else{
    console.log("pls login to continue");
}
//=========================================================================
let trafficlight = "yellow";

if (trafficlight === "green") {
    console.log("Go");
} else if (trafficlight === "yellow") {
    console.log("Prepare to stop");
} else if (trafficlight === "red") {
    console.log("Stop");
} else {
    console.log("Invalid traffic light color");
}
//=================================================================================
let trafficlight = "yellow";

switch (trafficlight) {
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Prepare to stop");
        break;
    case "red":
        console.log("Stop");
        break;
    default:
        console.log("Invalid traffic light color");
}

//============================================================================
let trafficlight = "yellow";
if (trafficlight === "yellow"){
    console.log("preparev to stop")
}
//============================================================================
let sum = 0;
let i = 0
while (i<=5){
    sum += i;
    i++;
}

console.log(sum);
// =================================================================
let countdown = [];
let i = 5

while (i>=0){
    countdown.push(i)
    i--;
}

console.log(countdown);
// ================================================
let teaCollection = [];
let tea;

do{
   tea = Prompt(`enter your fav tea (type "stop" to finish)`)

   if (tea!="stop"){
    teaCollection.push(tea)
   }

}while (tea!=="stop");

//===============================================================


let total = 0;
let k = 1;
do{
    total+=k;
    k++;
}while(k<=5);


//===============================================================
let numbers = [1,3,2,4]
let multipleNumbers = []


for (let l=0; l < numbers.length; l++){
    number = numbers[l] * 2;
    multipleNumbers.push(number);


}
console.log(multipleNumbers)

//=========================================================

let cities = ["paris","New York" , "Tokyo"];
let citiList = [];

for (let c=0;c<cities.length;c++){
    const myCity = cities[c];
    citiList.push(myCity);
}
console.log(citiList)
//========================================================
//flatten an array of arrays

let arr = [[1,2],[3,4],[5,6]];

let flattendArray = arr.map(arr =>arr).flat();
console.log(flattendArray);
//==================================================================================
let items = [
    {value:10},
    {value:20},
    {value:30},
    {value:40}
];

let updateItems = items.map((item,index) =>({
    ...item,
    value:item.value*index
}));
//========================================================================================

let users = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 30 }
];

let categorizedUsers = users.map(user => ({
    ...user,
    category: user.age > 30 ? 'senior' : 'junior'
}));

console.log(categorizedUsers);


//=========================================================

let teas = ["grrentea","black tea","chai","olang"];

let selectedTeas = [];

for (let i = 0; i<teas.length;i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i]);

}
console.log(selectedTeas);
//=====================================================================================

let cities = ["paris", "Tokyo","New York" ];
let Visitedcities = [];

for (let i =0 ;i<cities.length;i++){
    if(cities[i] === "Tokyo"){
        continue;
    }
    Visitedcities.push(cities[i]);
}
console.log(Visitedcities);


//====================================================================

let numbers = [1,2,3,4,5]
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4){
        break;
    }
    smallNumbers.push(num);
}
//==========================================================================
let teaTypes = ["grrentea","black tea","chai","olang"];
let preferTeas = [];

for (const tea of teaTypes){
    if(tea === "black tea"){
        continue;
    }
    preferTeas.push(tea);
}
//===========================================================
let citiesPopulation = {
    NewYork: 8419600,
    LosAngeles: 3980400,
    Chicago: 2716000,
    Houston: 2328000,
    Phoenix: 1690000
};

let cityNewPopulations = {}

for (const city in citiesPopulation){
    if (city == "Houston"){
        break;
    }
    cityNewPopulations[city]=citiesPopulation[city];

}
console.log(cityNewPopulations);
//===============================================================================
let salaries = {
    John: 5000,
    Jane: 6500,
    Jim: 4800,
    Lisa: 8000
};

let maxSalary = 0;
let maxPerson = "";

for (const person in salaries) {
    if (salaries[person] > maxSalary) {
        maxSalary = salaries[person];
        maxPerson = person;
    }
}

//==========================================================================================

let teaCollection = ["greentea","black tea","chai","olang"];
let availableTeas = [];

teaCollection.forEach((tea)=>{
    if (tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});

console.log(availableTeas)

//=================================================
let firstNames = ["John", "Jane", "Mary"];
let lastNames = ["Doe", "Smith", "Johnson"];
let users = [];

firstNames.forEach((firstName,index) =>{
    users.push({fullName: `${firstName} ${lastNames[index]}`});

});
console.log(users)