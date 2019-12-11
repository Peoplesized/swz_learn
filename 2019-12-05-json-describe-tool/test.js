//test object 
var obj = {
    "personal_details": {
      "name": "Manqoba",
      "surname": "Sukati"
    },
    "account_transactions": [
      {
        "date": "11-12-2019",
        "amount": 346
      },
      {
        "date": "05-12-2019",
        "amount": 500
      }
    ]
  }
//return all keys in an object
var level_count =  0;

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
    level_count += level_count;
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      all[key] = true;
      checkValue(obj[key], all, seen);
    }
  }
  
  var result = getKeys(obj);
  console.log(result,level_count);

  function iterate(obj, stack) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                console.log(property)
                iterate(obj[property], stack + '.' + property);
            }
             else {
                console.log(property)
            }
        }
    }
}

iterate(object, '')

