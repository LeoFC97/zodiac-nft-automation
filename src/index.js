require('dotenv').config();
const { startRace,claimReward } = require('./zodiacs-api');
const arrayOfCars = require('./cars');


(async () => {
    try {
        var listOfRaceResults = [{}];
        for (let i = 0; i < arrayOfCars.length; i++) {
            console.log(`carId dentro do primeiro for: ${arrayOfCars[i]}`)
            for(j=0;j<6;j++){
                console.log(`carId dentro do segundo for: ${arrayOfCars[i]}`);
                const raceWasStarted = await startRace(arrayOfCars[i]);
                console.log(`raceWasStarted: ${raceWasStarted}`);
                if(raceWasStarted){
                    await sleep(getRandomInt(12,16)*1000);
                }
                const resultOfCurrentRace = await claimReward(arrayOfCars[i]);
                console.log(resultOfCurrentRace);
                await sleep(getRandomInt(1,2)*1000);
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
