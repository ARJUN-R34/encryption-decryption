const cryptojs = require('crypto-js')

async function decrypt(encryptedPrivateKey, password) {
    var bytes = cryptojs.AES.decrypt(encryptedPrivateKey, password);
    var privateKey = bytes.toString(cryptojs.enc.Utf8);
    console.log("Decrypted Private Key", privateKey);
    return privateKey;
}
