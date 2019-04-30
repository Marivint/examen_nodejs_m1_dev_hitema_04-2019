module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
		var fs = require('fs');
		// var readStream = fs.createReadStream('./io/input');
		// return Buffer.from(readStream.pipe(process.stdout), 'base64').toString('utf8');
		// console.log(Buffer.from(readStream.pipe(process.stdout), 'hex').toString('utf8'));
		console.log(Buffer.from(readStream.pipe(process.stdout).toString('utf8'), "hex"));

		// data = fs.readFileSync('./io/input');
		// console.log(data.toString('base64'));
		// console.log(data, "hex");
    });
}
