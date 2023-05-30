let array = [1 , 2 , 3 , 5 , 7]

let length = array.length

for (let i =0; i<= length; i++){

    let arraytotal = []

      for (let array[i] = 2; array[i] <= Math.sqrt(array[i]); i++) {
    if (num % i === 0) {
      return false; 
  }
  else return arraytotal ++;
      }

}

  


/* 
- sẽ tạo 1 mảng chứa danh sách số nguyên tố

- tìm kiếm các số nguyên tố khác để push vào mảng cho đến khi mảng có số lượng bằng số lượng cần tìm theo nguyên lý số nào không chia hết cho 2 phần tử trong mảng số nguyên tố chính là số nguyên tố tiếp theo

- Sau cùng tính tổng các chữ số trong mảng
*/


function countPrimeNumber(count) {
  let current = 1;
  let primeNumbers = [];
  let sum = 0;

  while (primeNumbers.length < count) {
    let isPrimeLimit = 1; // flag

    for (let i = 0; i < primeNumbers.length; i++) {
      if (current % primeNumbers[i] == 0) {
        isPrimeLimit--;

      }
    }

    if (isPrimeLimit >= 0) {
      primeNumbers.push(current);
      sum += current;
    }
    current++;

  }
  return [sum, primeNumbers, count];

}

console.log(countPrimeNumber(7));