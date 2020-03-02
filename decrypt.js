const cryptojs = require('crypto-js')

async function decrypt(encryptedPrivateKey, hashedPassword) {
    var bytes = cryptojs.AES.decrypt(encryptedPrivateKey, hashedPassword);
    var privateKey = bytes.toString(cryptojs.enc.Utf8);
    console.log("Decrypted Private Key", privateKey);
    return privateKey;
}
