module.exports = function toReadable (number) {

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let humanNumber = [];
  const numStr = number.toString();

//0
  if (number === 0) {
    return 'zero';
//xxx
  } else if (numStr.length > 2) {
    //Ixx
    humanNumber[0] = ones[numStr[0]] + ' hundred';
    //xIx
    if (numStr[1] == 1) {
        humanNumber[1] = teens[numStr[2]];
    } else {
            humanNumber[1] = tens[numStr[1]];
            humanNumber[2] = ones[numStr[2]];
        } 
//xx
    } else if (numStr.length === 2) {
    //Ix
    if (numStr[0] == 1) {
        humanNumber[0] = teens[numStr[1]];
    } else {
            humanNumber[0] = tens[numStr[0]];
            humanNumber[1] = ones[numStr[1]];
        } 
//x
    } else if (numStr.length === 1) {
        humanNumber[0] = ones[numStr[0]];
    }

return humanNumber.filter(item => item).join(' ');
}
