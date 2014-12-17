var fs = require("fs"),
	fileName = "sample.txt";

fs.readFile(fileName, {encoding : "utf8"}, function(err, fileContents){
	if (err){
		console.log(err);
		return;
	} 
	console.log(fileContents);
})
