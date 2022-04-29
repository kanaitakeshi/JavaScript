// FizzBuzz問題　３の倍数の時Fizz,５の倍数の時Buzz,３の倍数かつ５の倍数の時FizzBuzzを出力する
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