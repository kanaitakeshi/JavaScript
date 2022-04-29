// 身長と体重からBMIと適正体重を出力する
var height = 1.7;
var weight = 60;

// BMIを出力
var bmi = weight / height / height;
console.log("BMIは" + bmi + "です");

// 適正体重を出力
var idealWeight = height * height * 22;
console.log("適正体重は" + idealWeight + "kgです");
