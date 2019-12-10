function describe(json, level = 1) {
  function iterate(obj, stack) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == 'object') {
          console.log(property);
          iterate(obj[property], stack + '.' + property);
        } else {
          console.log(property);
        }
      }
    }
  }

  iterate(obj, '');
  console.log(json, parseInt(level));
}

module.exports = {
  describe,
};
