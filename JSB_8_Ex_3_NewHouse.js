function newHouse(flower, num, budget) {
    let price = 0;
    switch (flower) {
        case "Roses":
            price = num * 5;
            if(num > 80){price *= 0.9;}
            break;
        case "Dahlias":
            price = num * 3.8;
            if(num > 90){price *= 0.85;}
            break;
        case "Tulips":
            price = num * 2.8;
            if(num > 80){price *= 0.85;}
            break;
        case "Narcissus":
            price = num * 3;
            if(num < 120){price *= 1.15;}
            break;
        case "Gladiolus":
            price = num * 2.5;
            if(num < 80){price *= 1.20;}
            break;
    }
    if(budget >= price){
        console.log(`Hey, you have a great garden with ${num} ${flower} and ${(budget - price).toFixed(2)} leva left.`);        
    }
    else{
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

newHouse("Roses", 55, 250)
//Not enough money, you need 25.00 leva more. 
newHouse("Tulips", 88, 260)
//Hey, you have a great garden with 88 Tulips and 50.56 leva left. 
newHouse("Narcissus", 119, 360)
//Not enough money, you need 50.55 leva more.
