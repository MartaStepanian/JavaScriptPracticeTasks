/*
 Solve a quadratic equation of the form ax^2 + bx + c = 0.
 */

function quadratic_equation(a,b,c) {
    d = Math.sqrt(Math.pow(b, 2)-4*c)
    console.log(d)
    if (d < 0){
        console.log('Solution does not exists')
    } else if (d === 0){
        root = (-(b) + d) / 2*a
        console.log(`Solution is ${root}`)
    } else if (d > 0 ){
        root1 = Math.floor((-(b) + d) / (2*a))
        root2 = Math.floor((-(b) - d) / (2*a))
        console.log(`Solutions are ${root1} and ${root2}`)
    }
}

quadratic_equation(5, -13, 6)