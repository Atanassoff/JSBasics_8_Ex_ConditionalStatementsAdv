function lowerOrUpper(ch){
    let x = ch.charCodeAt(0);
    console.log(x >= 65 && x <= 90 ? "upper-case" : "lower-case");
}

lowerOrUpper('L') 
//upper-case
lowerOrUpper('f') 
//lower-case 