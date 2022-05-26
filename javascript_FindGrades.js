
function findGrade(marks) {
    if(marks>=90 && marks<=100){
        return ` S grade`
    }
    if(marks>=80 && marks<90){
        return ` A grade`
    }
    if(marks>=70 && marks<80){
        return ` B grade`
    }
    if(marks>=60 && marks<70){
        return ` C grade`
    }
    if(marks>=50 && marks<60){
        return ` D grade`
    }
    if(marks>=40 && marks<50){
        return ` E grade`
    }
    if(marks>=0 && marks<40){
        return ` Student has failed`
    }
    else{
        return `Invalid marks`
    }
    
}
console.log(findGrade(80));