count = 0;
g = {};
function getKeys(obj, parent=NaN) {
  var keys = [];
  let temp = count
  if(typeof obj !== "object"){
    return typeof obj
  }else if (!Array.isArray(obj)&& obj instanceof Object) {
    count++;
    keys = Object.keys(obj);
    keys.forEach(k => {
      g[k] ={ level: temp, keys: getKeys(obj[k],k), parent: parent};
    });
    return keys
  } else if (Array.isArray(obj)){
    return obj.length
  }
}
function describe(json, level = 1) {
  console.log(`--keys on all levels`)
  getKeys(json).forEach( k => {
    console.log(` -${k}`)
  })
}


module.exports = {
  describe,
}
