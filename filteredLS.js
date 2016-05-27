var fs = require('fs');
var filepath = process.argv[2];
var extension = "." + process.argv[3];
var reg = new RegExp(extension);
fs.readdir(filepath, function(err, list) {
  if (err) throw err;
  list.forEach(function(item) {
    if (item.match(reg)) {
      console.log(item.replace(reg[0], ""));
    }
  })
});