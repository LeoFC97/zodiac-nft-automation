const axios = require('axios');

async function startRace(carId){
    try {
    console.log(`carId: ${carId}`);
    const options = {
        method: 'POST',
        url: "https://8za04rmw3eb0.grandmoralis.com:2053/server/functions/battlefield_startRace",
        headers: {'Content-Type': 'application/json'},
        data: {
            userCarId: carId,
            _ApplicationId: 'CtQ62LvQpO7aQ5YXWUp3AfzPkQAU8PASxvUhfl2S',
            _ClientVersion: 'js0.0.46',
            _InstallationId: '5c987e0f-0e58-4516-9d8f-c0e07e7d000a',
            _SessionToken: `${process.env._SessionToken}`
        }
    };

    const result = await axios.request(options)
    return result.data;
    }
    catch (err) {
        console.log(err);
    }

}
async function claimReward(carId){
    try {
    const options = {
        method: 'POST',
        url: "https://8za04rmw3eb0.grandmoralis.com:2053/server/functions/battlefield_claimReward",
        headers: {'Content-Type': 'application/json'},
        data: {
            userCarId: carId,
            _ApplicationId: 'CtQ62LvQpO7aQ5YXWUp3AfzPkQAU8PASxvUhfl2S',
            _ClientVersion: 'js0.0.46',
            _InstallationId: '5c987e0f-0e58-4516-9d8f-c0e07e7d000a',
            _SessionToken: `${process.env._SessionToken}`
        }
    };

    return await axios.request(options)
    }
    catch (err) {
        console.log(err);
        return 'deu merda rs';
    }

}


module.exports = {
    startRace,
    claimReward
}
