
function order_elements(array) {
    newArray = []
    for (let i = 0; i < Math.max.apply(Math, array) ; i++) {
        if(array.includes(i)){
            newArray.push(i)
        } else {
            newArray.push('undefined')
        }
    }
    console.log(newArray)
}

array = [4, 3, 0, 9]
order_elements(array)