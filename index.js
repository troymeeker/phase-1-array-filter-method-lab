// Code your solution here
    //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, name){
    const driverVar =  drivers.filter(function(driverName){
        console.log(driverName.toLowerCase());
     return driverName.toLowerCase() === name.toLowerCase()
   })  
    console.log(drivers)
    return driverVar;
}


function fuzzyMatch(carDrivers, firstLet){
 const newDriver = carDrivers.filter(function (driver){
      return driver.startsWith(firstLet) 
 });
return newDriver;
}





function matchName(drivers, firstName){
  const test =  drivers.filter( function (object){
    return object.name === firstName
        
 });
 return test;
}


