// 1st ans
function anatoVori(ana) {
    let vori = 0.0625;
    const convertanatovori = ana * vori;
    return convertanatovori;
 }
 console.log(anatoVori(5));
 
 
 
 // 2nd ans
 const shingara = 7;
 const samusa = 10;
 const jilapi = 15;
 function bill(shingara, samusa, jilapi) {
     const total = shingara + samusa + jilapi;
     return total;
 }
 console.log(bill(shingara*2, samusa*1, jilapi*3));
 
 
 
 
 
 // 3rd ans
 function calculatePicnicCost(numPeople) {
     let costPerPerson;
 
     if (numPeople <= 100) {
         costPerPerson = 5000;
     } else if (numPeople >100 && numPeople <=200) {
         costPerPerson = 4000;  
     } 
     else if (numPeople >200 && numPeople <=300 ) {
         costPerPerson = 3000;  
     }
     const totalCost = numPeople * costPerPerson;
     return totalCost;
 }
 console.log(calculatePicnicCost(100));
 
 
 // 4th ans
 
 function evenOdd(inputString) {
   const length = inputString.length;
 if (length % 2==0)  {
   result = 'even';
 } else {
   result = 'odd';
 }
 return result;
 }
 console.log(evenOdd("Batch01")); 

 

 
 // 5th ans
 
function findingBadData(array) {
  if (array < -0 ) {
    console.log("Bad Data");
  } 
  else if (array>0 ) {
    console.log("Good Data");  
  }
}
findingBadData(-10);

 
 // 6th ans(1)
 const cities = [
     { name: 'City A', population: 1200000, coordinates: { lat: 34.0522, lon: -118.2437 } },
     { name: 'City B', population: 800000, coordinates: { lat: 40.7128, lon: -74.0060 } },
     { name: 'City C', population: 500000, coordinates: { lat: 41.8781, lon: -87.6298 } },
   
   ];
 const populations = cities.map(city => city.population);
 const totalPopulation = populations.reduce((accum, currentPopulation) => accum + currentPopulation, 0);
 console.log('Total population:', totalPopulation);
 // 6th ans(2)
 
   let maxPopulationCity = cities[0];
   for (let i = 0; i < cities.length; i++);
   console.log(maxPopulationCity);
 
 // 6th ans(3)
   const averagePopulation = totalPopulation / cities.length;
 console.log(averagePopulation);