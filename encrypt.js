const cryptojs = require('crypto-js')

async function encrypt(hashedPassword, privateKey) {
    var encryptedPrivateKey = cryptojs.AES.encrypt(privateKey, hashedPassword)
    console.log("Encrypted Private Key", encryptedPrivateKey.toString())
    return encryptedPrivateKey;
}
