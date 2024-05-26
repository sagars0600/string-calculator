function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiter = ',';
  if(numbers.startsWith("//")){
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex+1); 
  }
  numbers = numbers.replace(new RegExp(`\\${delimiter}`, 'g'), ',');
  numbers = numbers.replace(/\n/g, ",");
  return numbers.split(",").reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;
