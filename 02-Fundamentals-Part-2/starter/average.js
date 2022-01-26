/*function Average(num1,num2,num3,num4,num5){
    const number = (num1+num2+num3+num4+num5)/5;
    return number;
}

const Average1 = Average(9,8,7,6,5);
console.log(Average1); */




function average (num1,num2,num3,num4,num5){
    const student = (num1+num2+num3+num4+num5)/5;
    if (student>80){
        return ` student got ${student} With A+ grade`;
    }else if (student>70 && student<80){
        return `student got ${student} number with B+ grade`;
    }else if (student>60 && student<70){
        return `student got ${student} number with C grade `;
    }else if (student>50 && student<60){
        return `student got ${student} number with D grade`;
    }else{ 
        return `failed`
    };
}

const result = average (40,70,60,90,60);
console.log(result)