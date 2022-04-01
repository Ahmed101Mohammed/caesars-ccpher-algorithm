function rot13(str) {
    // make a dectionary for alpha latters:
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const ALPHA = alpha.split("");

    // new string variable for collecting the new string:
    let strNew = "";

    for (let i of str)
    {
        // sure if the letter is an alphabetic charachter:
        if (/[a-zA-Z]/.test(i))
        {
            let letter = i.toUpperCase();

            let index = ALPHA.indexOf(letter);
            let indexNew = index + 13;

            strNew += ALPHA[indexNew%26];// Determine the place of the sectet letter and add it to strNew variable.
            continue;
        }
        strNew += i;
    }
    return strNew;
  }
  
  let a = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  console.log(a);