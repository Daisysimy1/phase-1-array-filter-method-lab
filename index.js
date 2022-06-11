// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const address = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
    
function findMatching(allDrivers, names)
{
   let same= allDrivers.filter(driver => driver.toLowerCase() == names.toLowerCase())
   return same
}
findMatching(drivers,'Bobby', address);

function fuzzyMatch(allDrivers,names)
{
    return allDrivers.filter(driver=>driver[0]==names[0])
}
fuzzyMatch(drivers,'Sa','mm','y',address);

function matchName(allDrivers, names)
{
    return allDrivers.filter(driver =>driver.name==names)
}
matchName(address, drivers,'Bobby', address);



