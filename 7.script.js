// for文を用いた場合の模範解答
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // iが３の倍数かつ５の倍数の時
    console.log("FizzBuzz");
  } else if (i % 3 === 0) { // iが３の倍数の時
    console.log("Fizz");
  } else if (i % 5 === 0) { // iが５の倍数の時
    console.log("Buzz");
  } else {
    console.log(i);
  }
}