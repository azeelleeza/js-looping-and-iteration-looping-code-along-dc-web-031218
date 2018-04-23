// Code your solutions in this file
function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i+1}.`);
  }
  return employeeNames;
}

function tailsNeverFails() {
  tailCount = 0;
  while(Math.round(Math.random())) {
    tailCount++;
  }
  return `You got ${tailCount} tails in a row!`;
}
