var fs = require('fs');
var regex = new RegExp("\\." + process.argv[3] + "$"); 

fs.readdir(process.argv[2], function callback(err, list) {
	if (err) throw err;
	for(var i=0; i<list.length; i++) {
		if(regex.test(list[i])) {		
			console.log(list[i]);
		}
	}
//	console.log(list);
}); 


//official solution
/*var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/
