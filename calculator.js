function add(numbers) {
    if (numbers === "") {
      return 0;
    }
    //we use split for input string by comas into array and use rduece to su up - that's why we use them
    return numbers.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);
  }

module.exports = add;