import wines from "./data";

let drinkAgain = [];
let keepDrinking = [];

for (let i = 0, i < wines.length, i++) {
    if(wines[i].isFinished===true) {
        drinkAgain.pop(wines[i]);
        console.log(drinkAgain);
    } else {
        keepDrinking.pop(wines[i]);
        console.log(keepDrinking);
    }
}