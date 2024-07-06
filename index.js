function generatorRandomString(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function generateId(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function generateEmail() {
    let x = generatorRandomString(5) + generateId(2) + '@gmail.com';
    return x;
  }
  
  function generateOTP(length = 6) {
    let result = '';
    const digits = '0123456789';
    const digitsLength = digits.length;
    for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
    }
    return result;
  } 
  module.exports = {
    generatorRandomString,
    generateId,
    generateEmail,
    generateOTP,
  };
  