const setYear = () => {
  let current_Year = new Date().getFullYear();
  return current_Year;
};

const checkName = (name) => {
    console.log(name.length);
  if (name.length > 4 && name.length < 50) {
    return true;
  } else {
    return false;
  }
};

const checkCreatePassword = (pwd) => {
  let PWD_Length = pwd.length;

  if ( PWD_Length < 8) {
    return false;
  } else {
    return checkPasswordCharacters(pwd);
  }
};

const checkPasswordCharacters = (pwd) => {
  let valid = [false, false, false];
  let simplelLetters = "abcdefghijklmnopqrstuvwxyz";
  let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let characters = "~`!@#$%^&*()_-+={}|[]/:;<>,.?'\"\\";

  for (let i = 0; i < simplelLetters.length; i++) {
    if (
      pwd.includes(simplelLetters.charAt(i)) &&
      pwd.includes(capitalLetters.charAt(i))
    ) {
      valid[0] = true;
      break;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (pwd.includes(numbers.charAt(i))) {
      valid[1] = true;
      break;
    }
  }

  for (let i = 0; i < characters.length; i++) {
    if (pwd.includes(characters.charAt(i))) {
      valid[2] = true;
      break;
    }
  }
  return valid[0] && valid[1] && valid[2];
};

const checkUniMail = (email) => {
  let Email_Length = email.length;
  if (Email_Length <= 0) {
    return false;
  } else {
    return checkEmailCharacters(email);
  }
};

const checkEmailCharacters = (email) => {
  let domain = "@eng.jfn.ac.lk";
  if (email.includes(domain) || email.toLowerCase().includes(domain)) {
    return true;
  } else {
    return false;
  }
};

export { setYear, checkName, checkCreatePassword, checkUniMail };
