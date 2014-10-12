//pwd has to be 32 chars long
//iv is optional, but when included should be 16 chars long

var crypto = require('crypto');
var CIPHER = 'aes-256-cbc';

function encrypt(string, pwd, iv) {
    iv = iv ||'axxhcgAAAAAAAAAA'; 
    var cipher, encrypted, error;
    try {
        cipher = crypto.createCipheriv(CIPHER, pwd, iv);
        encrypted = cipher.update(string, 'utf8', 'hex');
        encrypted+= cipher.final('hex');
    } catch(e) {
        error =e;
        // console.log(e);
    }
    return { encrypted: encrypted, error: error };
    return encrypted;
}
 
function decrypt(string, pwd, iv) {
    iv = iv ||'axxhcgAAAAAAAAAA'; 
    var decipher, decrypted, error;
    try {
        decipher = crypto.createDecipheriv(CIPHER, pwd, iv);
        decrypted = decipher.update(string, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
    } catch(e) {
        error =e;
        // console.log(e);
    }
    return { decrypted: decrypted, error: error };
}

// function createPwd() {
//     return crypto.createHash('sha256').update('Nixnogen').digest();
// }

module.exports = {
    encrypt: encrypt,
    decrypt: decrypt
};

// var pwd = '12345678';
// pwd += pwd;
// pwd += pwd;
// console.log(pwd, pwd.length);

// console.log(pwd, pwd.length, encrypt('facebook', pwd).encrypted);
// console.log(pwd, pwd.length, encrypt('facebooka', pwd).encrypted);
// var iv = '12345678';
// iv += iv;
// console.log(iv, iv.length);
// var loginToken = "lWpzgD2I2iu09y0LBU2veoMXcQvJMsBubVlvBAcSCmA";

// var fileMD5 = "11195fe740babc6a2860285fb0c622af";
// var e = encrypt(JSON.stringify({l:loginToken,f:fileMD5}), pwd);
// console.log('http://localhost:9000/test.txt?' + e.encrypted);
// console.log(decrypt(e.encrypted, pwd));


