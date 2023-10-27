
let numbers= [1,2,3,4,5]

let iterate=(numbers,iterating)=>{
    iterating(numbers)
}

function iterating(num){
    num.forEach(e => {
        document.write(e+"<br>")
    })
}

iterate(numbers,iterating)