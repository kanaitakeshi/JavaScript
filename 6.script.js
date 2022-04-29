var height = 1.7;
var weight = 60;

// この下にコードを書いてください

// BMIを出力
var bmi = weight / height / height;
console.log("BMIは" + bmi + "です");

// 適正体重を出力
var idealWeight = height * height * 22;
console.log("適正体重は" + idealWeight + "kgです");

// BMIの値を用いて処理を分岐
if (bmi < 18.5) {
  console.log("痩せ気味です");
} else if (bmi < 25) {
  console.log("普通です");
} else {
  console.log("肥満気味です");
}