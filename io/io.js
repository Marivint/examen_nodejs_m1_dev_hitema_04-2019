const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
		// var readStream = fs.createReadStream('./io/input');
		// return Buffer.from(readStream.pipe(process.stdout), 'base64').toString('utf8');
		// console.log(Buffer.from(readStream.pipe(process.stdout), 'hex').toString('utf8'));
		// console.log(Buffer.from(readStream.pipe(process.stdout).toString('utf8'), "hex"));

        var content = fs.readFileSync(filePath, 'utf8');
        content = Buffer.from(content, 'hex').toString('utf8');
        if(content) resolve(content)

		// data = fs.readFileSync('./io/input');
		// console.log(data.toString('base64'));
		// console.log(data, "hex");

=======
        fs.readFile(filePath, { encoding: 'utf8' }, (err, content) => {
            if (err) return reject(err);
            resolve(Buffer.from(content, 'hex').toString('utf8'));
        });
>>>>>>> corrections
    });
}