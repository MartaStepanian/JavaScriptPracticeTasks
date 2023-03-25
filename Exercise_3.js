/*
    Write a function to take three arguments, a, b, and c, and determine the sign of their product.
 */

function sign_detection(a, b, c) {
    if(a === 0 || b === 0 || c === 0 ){
        console.log('unsigned')
    } else {
        if (a>0 && b>0 && c>0){
            console.log('+')
        } else if (a<0 && b<0 && c<0){
            console.log("-");
        } else if (a>0 && b<0 && c<0) {
            console.log("+");
        } else if (a<0 && b>0 && c<0) {
            console.log("+");
        } else{
            console.log("-");
        }
    }
}

sign_detection(-14, 5, 0)
