function cinema(type, r, c) {
    let people = r * c;
    let income = -1;
    switch (type) {
        case "Premiere":
            income = people * 12;
            break;
        case "Normal":
            income = people * 7.5;
            break;
        case "Discount":
            income = people * 5;
            break;
        default:
            break;
    }
    if(income >= 0){console.log(`${income.toFixed(2)} leva`);
    }
}
cinema("Premiere", 10, 12)
//1440.00 leva
cinema("Normal", 21, 13) 
//2047.50 leva
cinema("Discount", 12, 30) 
//1800.00 leva 