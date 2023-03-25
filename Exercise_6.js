function summing_rows(array) {
    row_sum = []
    for (let i = 0; i < array.length ; i++) {
        sum = 0
        for(let j =0; j<array[i].length; j++){
            sum = sum + array[i][j]
        }
        row_sum.push(sum)
    }
    console.log(row_sum)
}

array = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]
summing_rows(array)