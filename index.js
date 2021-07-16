// Code your solution here
    //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, name){
    const driverVar =  drivers.filter(function(driverName){
        console.log(driverName.toLowerCase());
     driverName.toLowerCase() === name.toLowerCase()
   })  
    console.log(drivers)
    return driverVar;
}
//(function (pizza) { return name === pizza; })

findMatching(drivers, 'Bobby');

/*
function fuzzyMatch(){

}

function matchName(){

}
*/