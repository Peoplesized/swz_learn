obj = {
  type: 'FeatureCollection',
  simpler: {
    no: 'problems',
    to_describe: {
      objects_all_the_way: 'down',
      'yet another': {
        test: 'continuation',
        "help": {
          "what": {
            "level": "is this on"
          }
        },
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
//count = 0;
function getKeys(obj, count=0, parent=NaN) {
  var keys = [];
  let temp = count
  if(typeof obj !== "object"){
    return { "key": obj, type: typeof obj , level: count}
  }else if (!Array.isArray(obj) && typeof obj === "object") {
    keys = Object.keys(obj);
    keys.forEach(k => {
      if(typeof obj[k] === "object"){
        if(Array.isArray(obj[k])){
          keys[keys.indexOf(k)] = getKeys(obj[k],temp, parent)
        } else {
          keys[keys.indexOf(k)] = { "key": k, "children": getKeys(obj[k], count) , "type": typeof obj[k], level: count}
        }
        count++;
      } else {
        keys[keys.indexOf(k)] = { "key": k, "type": typeof obj[k], level: count}
      }
    });
    return keys
  } else if (Array.isArray(obj)){
    return { "length": obj.length, "type": "array" , level: count, key: parent} 
  }
}
function display(array, level=0){
  array.forEach(k => {
    console.log(`${" ".repeat(k.level)}-${k.key}`)
    if(level > k.level){
      if(k.hasOwnProperty("children")){
        display(k["children"], level)
      }
    }
  })
}
console.log(JSON.stringify(getKeys(obj)))


