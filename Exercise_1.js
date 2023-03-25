/*
    Determine the appropriate age category of an individual based on their age in months or years. The age_detection
    function takes in two arguments, age and month_year. If month_year is equal to 'month', the age argument is divided
    by 12 to convert the age from months to years.
 */

function age_detection(age, month_year) {
    if(month_year === 'month'){
        age = Math.floor(age / 12)
    }
    if(age<=1) {
        console.log('baby')
    }else if(age >= 1  && age <= 2){
        console.log('toddler')
    } else if (age >= 3 && age <= 12){
        console.log('child')
    } else if (age >= 13 && age <= 17){
        console.log('teenager')
    } else if (age >= 18){
        console.log('adult')
    }
}

age_detection(9, 'month')