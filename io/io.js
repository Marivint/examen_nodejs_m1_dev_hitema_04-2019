const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf8' }, (err, content) => {
            if (err) return reject(err);
            resolve(Buffer.from(content, 'hex').toString('utf8'));
        });
    });
}
