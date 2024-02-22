// console.log('hello from main.js')
// let age = 31
// console.log(age) 

// let age1
// age1 = 25
// console.log(age1)

// const sum = 555
// console.log(sum)
// //string
// const name='vish'
// const language="JavaScript"
// const channel= `Codevolution`
// //number
// const total=0
// const PI=3.14
// //boolean
// const isPrimary=true
// const isNewUser=false

// const person={
//     "name" : "Poo",
//     "firstName":"Pooja",
//     'lastName': 'Katyarmal',
//     'number':'25'
// }
//  console.log(person.firstName)

//  const evenNumber=[0,2,4,6,8]
//  console.log(evenNumber[3])
// let x=10
// let y=5
// console.log(x--)
// console.log(x>=y)

// const isValid = x>y && x<20
// console.log(isValid)

// const isValidNo = true
// console.log(!isValidNo)

// console.log('Pooja '+ "Katyarmal")

// const isEven= 10%2===0? 'even no' : "odd no"
// console.log(isEven)

// console.log('2'+'3')
// console.log(true +'3')
// console.log('2'-'3')
// console.log(false -'3')
// console.log('2'- null)
// console.log(5+ undefined)

// console.log(parseFloat(3.14))
// console.log(String(undefined))
// console.log(Boolean(NaN))

// const v1= '10'
// const v2= 10
// console.log(v1==v2)
// console.log(v1===v2)

// const num=-0
// if(num>0){
//     console.log('no is positive')
// }else if(num<0) {
//     console.log('no is negative')
// }else {
//     console.log('no is zero')
// }

// const color= 'yello 10'
// switch (color){
//     case 'red': console.log('Color is red')
//                 break
//     case 'blue': console.log('Color is blue')
//                 break
//     case 'green': console.log('Color is green')
//                 break
//     default : console.log('color is not valid')
// }

// for (i=1; i<=5;i++) {
//     console.log('iteration no '+i)
// }

// let i=1
// while(i<=5){
//     console.log('iteration no '+i)
//     i++
// }
// let i=7
// do{
//     console.log('iteration no '+i)
//     i++
// }while(i<=5)

// const numArray =[1,2,3,4,5]
// for (const num of numArray){
//     console.log('iteration no '+num)
// }

// function greet(user){
//     console.log('GM '+ user)
// }
// greet('Pooja')
// greet('Mahi')

// function add (a,b){
//     return a+b
// }
// const sum= add(5,10)
// console.log(sum)

const arrowSum= (a,b) => a+b
const sum= arrowSum (5,10)
console.log(sum)

const addFive=num=>num+5
const add=addFive(8)
console.log(add)

const y= 45
const x= 55

function aaa() {
    let x='poo'
    console.log(x)
    console.log(y)
}
aaa()

if (true){
    let x='Pooja'
    console.log(x)
    console.log(y)
}