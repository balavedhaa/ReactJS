//var
var a = 5;
console.log("The value of this variable before altering :"+""+a);
{
    var a =7
    console.log("The value of this variable after altering :"+""+a);

console.log("The value of this variable after block altering :"+""+a);
}

//let
let b= 9;
console.log("The value of let before altering :"+""+b);
{
    let b =7
    console.log("The value of let after altering :"+""+b);
}
console.log("The value of let after block altering :"+""+b);

//const
const c = 8;
console.log("The value of const before altering :"+""+c);

//if..else..
a=0
if(a===0){
    console.log(a)
    console.log("The number is Zero")
    console.log("The number is 0 and adding 1 to make it positive")
    a=a+1
    console.log(a)
    console.log("The number is Positive")
}

else if(a>0){
    console.log("The number is Positive")
}
else{
    console.log("The number is Negative")
}

//looping,for,foreach,forin,forof while,do..while
//for loop
console.log("For loop")
a=5
for(i=0;i<a;i++){
    console.log(i)
}

//while loop
console.log("While loop")
i=0
while (i<=a){
    console.log(i)
    i++
 }

 //foreach loop
 console.log("ForEach loop")
 array=[10,20]
 array.forEach(element => {console.log(element)});

