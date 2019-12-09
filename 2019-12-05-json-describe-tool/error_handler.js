let fs = require('fs');


function check_file_existence(file){
    try {
       fs.readFileSync(file,'utf8')
    } catch (e) {
      console.error(`Error: the file specified does not exist`)
      return false
    }
    return true
  }

function check_json_validity(obj){
    try {
      JSON.parse(obj);
    } catch(e) {
      console.error(`Error: can not parse object as json` )
      return false
    }
    return true 
}
module.exports = {
    check_file_existence,
    check_json_validity
}