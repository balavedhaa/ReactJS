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