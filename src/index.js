/**
 * const, letの変数宣言
 */
// var  var1 = "var変数"
// console.log(var1)
// //var変数は上書き可能
// var var1 = "var変数を上書き"
// console.log(var1)
// //var変数は再宣言可能

// var var1 = "var再宣言"
// console.log(var1)


//アロー関数

//従来の関数
function func1(str){
    return str;
}
console.log(func1("hello"))

const func2 = function(str){
    return str;
}
console.log(func2("world"))

const func3 = (str) => {
    return str;
}
console.log(func3("Hello World"))
const func4 = str => str
console.log(func4("Hello World"))

const func5 = (num1,num2) => {
    return num1+num2;
}
console.log(func5(1,4))

const myprofile = {
    name:"じゃけ",
    age:28,
};

const message1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}歳です`
console.log(message1);

const {name,age} = myprofile;
const message2 =  `私の名前は${name}です。年齢は${age}歳です`
console.log(message2)


const myprofile1 = ["じゃけ",28];
const message3 = `私の名前は${myprofile1[0]}です。年齢は${myprofile1[1]}歳です。`
console.log(message3)


//デフォルト値
//jsは変数に何も値がない時"undefind"となる。
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`)
sayHello("こーよー")
sayHello()

//スプレッド構文
//配列の展開
const arr1 = [1,2]
const sumFunc = (num1,num2) => console.log(num1+num2)
sumFunc(arr1[0],arr1[1]);
sumFunc(...arr1)

//まとめる
const arr2 = [1,2,3,4,5]
const [num1,num2,...arr3] = arr2;
console.log(num1)
console.log(num2)
console.log(arr3)

//配列のコピー

const arr4 = [10,11]
const arr5 = [20,21]
const arr6 = [...arr4]
console.log(arr6)
const arr7 = [...arr4,...arr5]
console.log(arr7)

const arr8 = arr4;
arr8[0] = 1000
console.log(arr8)
console.log(arr4)

/**
 * mapやfilterを使った配列処理
 */

const nameArry = ["田中","山田","じゃけ"];
for (let index = 0; index < nameArry.length; index++ ) {
    console.log(nameArry[index])
}
const nameArry2 = nameArry.map((name)=>{
    return name;
})
console.log(nameArry2)

nameArry.map((name) => console.log(name));

const numArry = [1,2,3,4,5]
const newNumArry = numArry.filter((num) => {
    return num%2 == 1;
})
console.log(newNumArry)
const nameArry3 = ["田中","山田","じゃけ"];
for (let index = 0; index < nameArry3.length; index++ ) {
    console.log(`${index + 1}番目は${nameArry[index]}です。`)
}
nameArry3.map((name,index) => console.log(`${index + 1}番目は${name}です。`))

const newNameArry = nameArry.map((name) => {
    if (name== "じゃけ"){
        return name 
    }else{
        return `${name}さん`
    }
})
console.log(newNameArry)

/**
 * 三項演算子
 */
//ある条件？条件がTrueのとき：falseの時

const let1 = 1 > 0 ? 'tureです':'falseです';
console.log(let1)
const num3 = "1300"
console.log(num3.toLocaleString())

const formattedNum = typeof num3 === 'number' ? num3.toLocaleString() :"数値を入力してください";
console.log(formattedNum)

// const checkSum = (num4,num5)=> {
//     if (num4 + num5  > 100){
//         return '100を超えています'
//     }else{
//         return '許容範囲ないです'
//     }
// }
const checkSum = (num4,num5) => {
    return num4+num5 > 100 ? "100を超えています" : "許容範囲内です";
}
console.log(checkSum(50,60))

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

const flag1 = true
const flag2 = false
if (flag1 == true || flag2==true){
    console.log("1か2はtureになります")
}
if (flag1 == true && flag2==true){
    console.log("1と2はtureになります")
}else{
    console.log("1か2はfalseになります")
}

const value = null
const fee = value || "金額未設定です"
console.log(fee)



const value2 = 100
const fee2  =value2 && "何か設定されました"
console.log(fee2)