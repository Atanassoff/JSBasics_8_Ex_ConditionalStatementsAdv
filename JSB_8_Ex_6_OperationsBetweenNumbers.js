function operationBetweenNumbers(n1, n2, operator) {
    let isValid = true;
    let result = 0;
    let oddEven = "";
    switch (operator) {
        case "+":
            result = n1 + n2;
            if(result % 2 === 0){oddEven = " - even";}
            else{oddEven = " - odd";}
            break;
        case "-":
            result = n1 - n2;
            if(result % 2 === 0){oddEven = " - even";}
            else{oddEven = " - odd";}
            break;
        case "*":
            result = n1 * n2;
            if(result % 2 === 0){oddEven = " - even";}
            else{oddEven = " - odd";}
            break;
        case "/":
            if(n2 === 0){isValid = false;}
            else{result = n1 / n2;}
            break;
        case "%":
            if(n2 === 0){isValid = false;}
            else{result = n1 % n2;}
            break;
        default:
            break;
    }
    if(isValid === false){
        console.log(`Cannot divide ${n1} by zero`);
    }
    else if(operator === "+" || operator === "-" || operator === "*"){
        console.log(`${n1} ${operator} ${n2} = ${result}${oddEven}`);
    }
    else if(operator === "/"){
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    }
    else if(operator === "%"){
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    }
}

operationBetweenNumbers(10, 12, "+")
//10 + 12 = 22 - even 
operationBetweenNumbers(123, 12, "/")
//123 / 12 = 10.25 
operationBetweenNumbers(112, 0, "/")
//Cannot divide 112 by zero
operationBetweenNumbers(10, 1, "-")
//10 – 1 = 9 - odd 
operationBetweenNumbers(10, 3, "%")
//10 % 3 = 1 
operationBetweenNumbers(10, 0, "%")
//Cannot divide 10 by zero
operationBetweenNumbers(7, 3, "*")
//7 * 3 = 21 - odd)