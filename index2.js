const nextISSTimesForMyLocation = require("./iss_promised")

nextISSTimesForMyLocation()
.then((data)=> {
  for (const pass of data) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}).catch((error)=>{
  console.log(error);
});
