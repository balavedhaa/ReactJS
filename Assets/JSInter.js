//Array

//array = [10,20]
//array.forEach(element => {
  //  console.log(element)
//});
const array = [10,20,"KSP",23.08,Date()]
for (var ele in array){
    console.log(array[ele])
}


array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log("After popping:")

if(array.length>0){
    console.log("elements are present")
    for(var ele of array){
        console.log(ele)
    }
}
else{
    console.log("elements are not present")
}
array.push(1)
if(array.length>0){
    console.log("elements are present")
    for(var ele of array){
        console.log(ele)
    }
}
else{
    console.log("elements are not present")
}
//OBJECT
a = {
    car: "Audi",
    model: "A8",
    airbags:8,
    wheels:5,
    color:"blue"
}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)
a.sunroof = "Yes"
console.log(a)

//NESTED OBJS
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)
a.sunroof = {isPresent:"YES",Shape:"Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)
for(var ele in a){
    console.log(ele+ ":"+ a[ele])
    if(typeof a[ele]=="object")
    {
        for(var val in a[ele]){
            console.log(val +":"+a[ele][val])
        }
    }
}

//Functions

//function fun_name(){
//    console.log("5"+5)
//}
//fun_name()

//Functions
function fun1 (){
    console.log("5" + 5)
}

function fun2 (){
    console.log(5 + 5 +"5")
}

function fun3 (){
    console.log("5" + 5 + 5)
}

function fun4 (){
    console.log(5 + 5 + " Hello " + 5 + 5)
}

fun1()
fun2()
fun3()
fun4()

function fun_name (a,b){
    return((a + b + " Hi " + 5 + 5))
}
console.log(fun_name(2,3))

a = () => {
    console.log("Hello World")
}

//a=()=>console.log("Hello World")
//a()

a = () => {
    console.log("Hello World")
}
a()

class AIDS{
    abcd = "alphabet";
    sum(){
        console.log("Bala")

    }
}
a = new Object()
a.name = AIDS
console.log(a)
object1 = new AIDS()
console.log(object1.abcd)
object1.sum()