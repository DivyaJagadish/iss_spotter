const request = require('request-promise-native');
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = function(body) {
  const ip =JSON.parse(body).ip
  return request (`https://freegeoip.app/json/${ip}`);

};
const fetchISSFlyOverTimes = function(body) {
  const data = JSON.parse(body)
  const url = `http://api.open-notify.org/iss-pass.json?lat=${data.latitude}&lon=${data.longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};

module.exports =  nextISSTimesForMyLocation ;