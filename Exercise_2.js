/*
    Determine if a student has passed a course based on their grades. The passing_course function takes in three
    arguments, grade1, grade2, and grade3, representing the student's grades for three assessments.
 */

function passing_course(grade1, grade2, grade3) {
    average = (grade1+grade2+grade3)/3
    if(average >= 50){
        console.log('passed')
    } else {
        console.log('not passed')
    }
}

passing_course(65, 70, 60)