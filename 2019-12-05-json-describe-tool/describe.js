count = 0
function getKeys(obj) {
  var keys = [];
  let temp = count
  if(typeof obj !== "object"){
    return { "key": obj, type: typeof obj , level: count}
  }else if (!Array.isArray(obj) && typeof obj === "object") {
    count++;
    keys = Object.keys(obj);
    keys.forEach(k => {
      if(typeof obj[k] === "object" && !Array.isArray(obj[k])){
        keys[keys.indexOf(k)] = { "key": k, "children": getKeys(obj[k]) , "type": typeof obj[k], level: temp}
      } else {
        keys[keys.indexOf(k)] = { "key": k, "type": typeof obj[k], level: temp}
      }
    });
    return keys
  } else if (Array.isArray(obj)){
    return { "length": obj.length, "type": "array" , level: temp} 
  }
}
function display(array, level=0){
  array.forEach(k => {
    if(level >= k.level){
      if(k.hasOwnProperty("children")){
        if(level > k.level)
          console.log(`${" ".repeat(k.level + 2)}-${k.key}:`)
        else
          console.log(`${" ".repeat(k.level + 2)}-${k.key}`)
        display(k["children"], level)
      } else {
        console.log(`${" ".repeat(k.level + 2)}-${k.key}`)
      }
    }
  })
}
function summarize_key(key){
  let description = key
}
function display_summary(array, level=0){
  array.forEach(k => {
    if(level >= k.level){
      if(k.hasOwnProperty("children")){
        if(level > k.level)
          console.log(`${" ".repeat(k.level + 2)}-${k.key}:`)
        else
          console.log(`${" ".repeat(k.level + 2)}-${k.key}`)
        display(k["children"], level)
      } else {
        console.log(`${" ".repeat(k.level + 2)}-${k.key}`)
      }
    }
  })
}
function describe(obj, level = 0) {
  console.log(`--level ${level}`)
  display(getKeys(obj), level)
}

module.exports = {
  describe,
}
