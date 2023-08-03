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