let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = false;
let runnerAge = 20;

if (runnerAge >= 18 && regEarly) {
  raceNumber += 1000;
  console.log("You race at 9:30 AM.");
  console.log(`Your race number: ${raceNumber}`);
} else if (runnerAge >= 18 && !regEarly) {
  console.log("Late adults race at 11:00 AM.");
  console.log(`Your race number: ${raceNumber}`);
} else {
  console.log("Youth registrants run at 12:30 PM regardless of registration time.");
  console.log(`Your race number: ${raceNumber}`);
}