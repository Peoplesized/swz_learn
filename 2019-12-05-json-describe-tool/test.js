obj = {
  type: 'FeatureCollection',
  simpler: {
    no: 'problems',
    to_describe: {
      objects_all_the_way: 'down',
      'yet another': {
        test: 'continuation',
      },
    },
    testing: 'describe tool',
  },
  features: [
    {
      type: 'Feature',
      properties: {
        id: 0,
        exceedance_uncertainty: 0.8515777478155229,
        n_trials: 500,
        n_positive: 214.5905270803485,
      },
      geometry: {
        type: 'Point',
        coordinates: [17.631581171470312, 20.61973360070085],
      },
    },
  ],
};

//return all keys in an object
count = 0;
function getKeys2(obj, level = 0) {
  var keys = [];
   if (count <= level) {
    if (obj instanceof Object && !Array.isArray(obj)) {
      keys = Object.keys(obj);
      console.log(`--level ${count}`);
      keys.forEach(k => {
        console.log(`   - ${k}`);
      });
      keys.forEach(k => {
        getKeys2(obj[k], level);
      });
    } else if(Array.isArray(obj)) {
      keys = Object.keys(obj[0])
      keys.forEach(k => {
        console.log(`   - ${k}`);
      });
    }
    count++;
  }
  return keys;
}
getKeys2(obj, 2)
