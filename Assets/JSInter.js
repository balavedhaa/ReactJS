[2:59 pm, 03/08/2023] jyothilakshmi ai&ds kct: //Array

const array = [10,20,"Vaishali",23.08,Date()]
console.log("Before change :")
for (var ele in array){
    console.log(array[ele])
}
console.log("After change :")
array.push("3rd Years")

for (var ele of array){
    console.log(ele)
}
array.pop()
for (var ele of array){
    console.log(ele)
}
array.pop()
array.pop()
array.pop()
array.pop()
console.log("After popping all the elements")

if(array.length > 0){
    console.log("Elemetns are present")
    for(var ele of array){
        console.log(ele)
    }
}
//new
const array = [10, 20, "Mayu", 23.08, Date()]
console.log("B4 Change:")
for (var ele in array){
    console.log(array[ele])
}
console.log("Af Change:")
array.push("3rd Year")

for (var ele of array){
    console.log(ele)
}
array.pop()
array.pop…
[2:59 pm, 03/08/2023] jyothilakshmi ai&ds kct: // looping, for, foreach, forin, forof while, do..while
//lets try foreach and forin
for(i = 0; i<a;i++){
    console.log(i)
}

//while loop
i = 0
while(i <=a){
    console.log(i)
    i++
}

array = [10,20]
array.forEach(element => console.log(element));
[2:59 pm, 03/08/2023] jyothilakshmi ai&ds kct: //Objects

a = {
    car: "Audi", 
    model: "A8" ,
    airbags: 8,
    wheels: 5,
    color: "blue"
}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
//change features
a.car = "BMW"
console.log(a)
//add features
a.sunroof = "Yes"
console.log(a)
//nested object
a.sunroof = {isPresent: "Yes",Shape: "Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)

for (var ele in a){
    console.log(ele +":" + a[ele])
}