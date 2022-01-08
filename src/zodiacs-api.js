const axios = require('axios');

async function startRace(carId){
    try {
    console.log(`carId: ${carId}`);
    const options = {
        method: 'POST',
        url: "https://8za04rmw3eb0.grandmoralis.com:2053/server/functions/battlefield_startRace",
        headers: {
            'Content-Type': 'application/json',
            'authority': 'https://8za04rmw3eb0.grandmoralis.com:2053',
            'accept': '*',
            'accept-encoding': 'gzip, deflate, br',
            'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4692.71 Safari/537.36' 
        },
        data: {
            userCarId: carId,
            _ApplicationId: 'CtQ62LvQpO7aQ5YXWUp3AfzPkQAU8PASxvUhfl2S',
            _ClientVersion: 'js0.0.46',
            _InstallationId: '5c987e0f-0e58-4516-9d8f-c0e07e7d000a',
            _SessionToken: `${process.env.SessionToken}`
        }
    };

    const result = await axios.request(options)
    return true;
    }
    catch (err) {
        console.log(err.response.data);
        return false;
    }

}
async function claimReward(carId){
    try {
    const options = {
        method: 'POST',
        url: "https://8za04rmw3eb0.grandmoralis.com:2053/server/functions/battlefield_claimReward",
        headers: {
            'Content-Type': 'application/json',
            'authority': 'https://8za04rmw3eb0.grandmoralis.com:2053',
            'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4692.71 Safari/537.36' 
        },
        data: {
            userCarId: carId,
            _ApplicationId: 'CtQ62LvQpO7aQ5YXWUp3AfzPkQAU8PASxvUhfl2S',
            _ClientVersion: 'js0.0.46',
            _InstallationId: '5c987e0f-0e58-4516-9d8f-c0e07e7d000a',
            _SessionToken: `${process.env.SessionToken}`
        }
    };

    const result = await axios.request(options)
    return result.data.result.result;
    }
    catch (err) {
        console.log(err.response.data);
        return false;
    }

}


module.exports = {
    startRace,
    claimReward
}
