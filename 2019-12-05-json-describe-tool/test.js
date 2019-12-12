//test object 
var buckets = require('buckets-js');
var obj = {
  "personal_details": {
    "name": "Manqoba",
    "surname": "Sukati"
  },
  "account_transactions": {
      "date": "11-12-2019",
      "amount": 346
    }
}
//return all keys in an object
tree = new buckets.BSTree()

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
  

console.log(count)

