const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = direct == undefined ? true : direct;

    this.alphabets = [];
    this.alphabets[0] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 1; i < this.alphabets[0].length; i++) {
      this.alphabets[i] = this.alphabets[0].substr(i);
      this.alphabets[i] = this.alphabets[i].concat(this.alphabets[0].substring(0, i));
    }
  }

  encrypt(message, key) {
    if (!message) throw Error("NA message arg");
    if (!key) throw Error("NA key arg");

    message = message.toUpperCase();
    key = key.toUpperCase();
  
    var encryptedMessage = '';
    var keyIndex = 0;
    for (var i = 0; i < message.length; i++) {
      if (keyIndex >= key.length) { keyIndex = 0; }

      let plainLetter = message.charAt(i);
      let keyLetter = key.charAt(keyIndex);

      let row = this.alphabets[0].indexOf(keyLetter);
      let letterIndex = this.alphabets[0].indexOf(plainLetter);

      if (letterIndex === -1) {
        encryptedMessage += plainLetter;
      } else {
        encryptedMessage += this.alphabets[row].charAt(letterIndex);
        keyIndex++;
      }
    }
    return  this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  } 
 
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage) throw Error("NA message arg");
    if (!key) throw Error("NA key arg");

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    var plainMessage = '';
    var keyIndex = 0;
    for (var i = 0; i < encryptedMessage.length; i++) {
      if (keyIndex >= key.length) { keyIndex = 0; }

      let encryptedLetter = encryptedMessage.charAt(i);
      let keyLetter = key.charAt(keyIndex);

      let row = this.alphabets[0].indexOf(keyLetter);
      let letterIndex = this.alphabets[row].indexOf(encryptedLetter);

      if (letterIndex === -1) {
        plainMessage += encryptedLetter;
      } else {
        plainMessage += this.alphabets[0].charAt(letterIndex);
        keyIndex++;
      }
    }
    return this.direct ? plainMessage : plainMessage.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
