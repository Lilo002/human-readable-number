module.exports = function toReadable (number) {
  let simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let double = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let toHundred = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number < 10) {
    return simple[number];
  } else if (number < 20) {
    return double[number - 10];
  } else if (number < 100) {
    let a = Math.floor(number / 10);
    let b = number%10;
    if (number % 10 == 0) {
        return toHundred[a - 1];
    }
    else {return `${toHundred[a - 1]} ${simple[b]}`;
        }
   } else {
    let d = Math.floor(number / 100);
    let h = Math.floor((number - (d * 100)) / 10);
    let e = number - (d * 100) - (h * 10);
    if (number % 100 == 0) {
        return `${simple[d]} hundred`;
    }
    else if (number % 10 == 0) {
        return `${simple[d]} hundred ${toHundred[h - 1]}`;
    } else if (((number % 100) > 9) && ((number % 100) < 20)) {
        return `${simple[d]} hundred ${double[e]}`;
    } else if (h == 0) {
        return `${simple[d]} hundred ${simple[e]}`;
    }
    return `${simple[d]} hundred ${toHundred[h - 1]} ${simple[e]}`;
   }
}
