const fs = require('fs');

const breedDetailsFromFile = function(breed,callback) {
  //console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    //console.log("In readFile's Callback: it has the data.");
    
    callback(data);
  });
  
};

// we try to get the return value
const consoleFn = breed => {
  console.log(breed);
}

// breedDetailsFromFile('Russian', consoleFn);
//gets data from breed, and runs callback with data as parameter.
module.exports = breedDetailsFromFile