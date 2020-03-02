const cryptojs = require('crypto-js')

async function encrypt(password, privateKey) {
    var encryptedPrivateKey = cryptojs.AES.encrypt(privateKey, password)
    console.log("Encrypted Private Key", encryptedPrivateKey.toString())
    return encryptedPrivateKey.toString();
}
