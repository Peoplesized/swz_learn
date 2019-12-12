function describe(json, level = 1) {
  console.log(`--keys on all levels`)
  getKeys(json).forEach( k => {
    console.log(` -${k}`)
  })
}
function getKeys(obj) {
  var all = {}; 
  var seen = [];
  checkValue(obj, all, seen);
  return Object.keys(all);
}

function checkValue(value, all, seen) {
  if (Array.isArray(value)) return checkArray(value, all, seen);
  if (value instanceof Object) return checkObject(value, all, seen);
}
function checkArray(array, all, seen) {
  if (seen.indexOf(array) >= 0) return;
  seen.push(array);
  for (var i = 0, l = array.length; i < l; i++) {
    checkValue(array[i], all, seen);
  }
}
function checkObject(obj, all, seen) {
  if (seen.indexOf(obj) >= 0) return;
  seen.push(obj);
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    all[key] = true;
    checkValue(obj[key], all, seen);
  }
}


function iterate(obj, stack) {
  test.push(Object.keys(obj))
  for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
          if (typeof obj[property] == "object") {
              iterate(obj[property], stack + '.' + property);
          }
           else {
              console.log(property)
          }
      }
  }
}

module.exports = {
  describe,
}
