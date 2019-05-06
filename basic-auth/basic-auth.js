const crypto = require('crypto');
<<<<<<< HEAD
const hash = crypto.createHash('sha1');
const hpassword = hash.write('password');
hash.end();
 
function sha1Encode(data) {
    let hash = crypto.createHash('sha1');
     let response = hash.write(data);
     hash.end();
     return response;
=======
const HttpStatus = require('http-status-codes');

function sha1Encode(data) {
    const hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest('hex');
>>>>>>> corrections
}
 
module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
<<<<<<< HEAD
 
    const [login, password] = decoded.split(':');
    let pwd = sha1Encode(password);
    if (login === 'node' && pwd === hpassword) {
        return next();
    }else {
        response.sendStatus(401);
    }
};
=======
    const [login, password] = decoded.split(':');

    if (login === 'node' && password === sha1Encode('password')) return next();
    response.sendStatus(HttpStatus.UNAUTHORIZED);
}
>>>>>>> corrections
