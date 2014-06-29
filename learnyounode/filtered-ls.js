var fs = require('fs');

module.exports = function (path, ext, callback) {
    var regex = new RegExp("\\." + ext + "$"); 
    var fileList = [];
    
    fs.readdir(path, function (err, list) {
	   if (err) return callback(err);
	   
        for(var i=0; i<list.length; i++) {
		  if(regex.test(list[i])) {		
			fileList.push(list[i]);
		  }
	   }  
        return callback(null, fileList);
//	console.log(list);
    }); 
}i

//official solution
/*var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
    })
}
*/
