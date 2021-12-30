require('dotenv').config();
const { startRace,claimReward } = require('./zodiacs-api');
const arrayOfCars = require('./cars');


(async () => {
    try {
        var listOfRaceResults = [{}];
        for (let i = 0; i < arrayOfCars.length; i++) {
            console.log(`carId dentro do primeiro for: ${arrayOfCars[i]}`)
            for(j=0;j<12;j++){
                console.log(`carId dentro do segundo for: ${arrayOfCars[i]}`);
                await startRace(arrayOfCars[i]);
                await sleep(12*1000);
                const resultOfCurrentRace = await claimReward(arrayOfCars[i]);
                console.log(`raceResult: ${resultOfCurrentRace}`);
                listOfRaceResults.push(resultOfCurrentRace);
            }
        };
    } catch (err) {
        console.log(err);
    }
})()

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
