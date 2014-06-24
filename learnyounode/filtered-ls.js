var fs = require('fs');

module.exports = function (path, ext, callback) {
    var regex = new RegExp("\\." + ext + "$"); 
    var fileList = [];
    
    fs.readdir(path, function (err, list) {
	   if (err) throw err;
	   
        for(var i=0; i<list.length; i++) {
		  if(regex.test(list[i])) {		
			fileList.push(list[i]);
		  }
	   }  
        return callback(null, fileList);
//	console.log(list);
    }); 
}
