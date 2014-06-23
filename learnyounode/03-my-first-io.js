var fs = require('fs')
var paragraph = fs.readFileSync(process.argv[2]).toString()
//console.log(paragraph)
console.log(paragraph.split("\n").length-1)
