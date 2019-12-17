//return all keys in an object
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

function find(jsonObj, param) {
  if( jsonObj !== null && typeof jsonObj == "object" ) {
      Object.entries(jsonObj).forEach(([key, value]) => {
          // key is either an array index or object key
          if(key === param ){
            return true
          } else {
            traverse(value);
          }
      });
  }
  return false
}

function getKeysOnLevel(obj, level = 0) {
  getKeys(obj);
  temp = Object.keys(g);
  console.log(`--level ${level}`)
  for(let i=0; i <= level; i++ ){
    temp.forEach(k => {
      if (g[k].level === i) {
        console.log(`${" ".repeat(i)}${k}`);
        if((g[k].level + 1 <= level) && Array.isArray(g[k].keys)){
          g[k].keys.forEach(e => {
            console.log(`${" ".repeat(i + 1)}-${e}`)
            delete g[k][e]
          })
        }
      }
    });    
  }
}
function describe(obj, level = 1) {
  getKeys(obj);
  temp = Object.keys(g);
  console.log(`--level ${level}`)
  for(let i=0; i <= level; i++ ){
    temp.forEach(k => {
      if (g[k].level === i) {
        console.log(`${" ".repeat(i)}${k}`);
        if((g[k].level + 1 <= level) && Array.isArray(g[k].keys)){
          g[k].keys.forEach(e => {
            console.log(`${" ".repeat(i + 1)}-${e}`)
            delete g[k][e]
          })
        }
      }
    });    
  }
}


module.exports = {
  describe,
}
