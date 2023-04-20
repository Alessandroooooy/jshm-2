// Развернуть этот массив в обратном направлении

let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']
let reversedArr = []



for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
}

console.log(reversedArr)

//Развернуть этот массив в обратном направлении

let arr1 = [44, 12, 11, 7, 1, 99, 43, 5, 69]
let reversedArr1 = []

for(let i = arr1.length - 1; i >= 0; i--) {
    reversedArr1.push(arr1[i])
}

console.log(reversedArr1)

//Развернуть этy строку в обратном направлении
let str = 'Hi I am ALex'
let reversedStr = ''

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i]
}

console.log(reversedStr)


//сделать все буквы с маленькой

let str1 = 'Hi I am ALex'
let newStr = ''

for (let i = 0; i < str1.length; i++) {
  let charCode = str1.charCodeAt(i);
  if (charCode >= 65 && charCode <= 90) { 
    charCode += 32
  }
  newStr += String.fromCharCode(charCode)
}

console.log(newStr)

////сделать все буквы с большой

let str2 = 'Hi I am ALex';
let newStr2 = '';

for (let i = 0; i < str2.length; i++) {
  let charCode = str2.charCodeAt(i);
  if (charCode >= 97 && charCode <= 122) { 
    charCode -= 32; 
  }
  newStr2 += String.fromCharCode(charCode); 
}

console.log(newStr2)

//сделать все буквы с большой

let arr3 = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']

for(let i = 0; i < arr3.length; i++){
arr3[i] = arr3[i].toUpperCase()
}

console.log(arr3)

//сделать все буквы с маленькой 

let arr4 = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']

for(let i = 0; i < arr4.length; i++){
arr4[i] = arr4[i].toLowerCase()
}

console.log(arr4)

