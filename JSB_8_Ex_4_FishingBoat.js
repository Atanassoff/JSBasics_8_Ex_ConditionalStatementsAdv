function fishingBoat(budget, season, people) {
    let price = 0;
    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
            price = 4200;
            break;
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
        default:
            break;
    }
    if (people <= 6) {
        price *= 0.9;
    } else if (people >= 7 && people <= 11) {
        price *= 0.85;
    } else if (people >= 12) {
        price *= 0.75;
    }
    if(people % 2 === 0 && season !== "Autumn"){
        price *= 0.95;
    }
    if(budget >= price){
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(3000, "Summer", 11)
//Not enough money! You need 570.00 leva. 
fishingBoat(3600, "Autumn", 6)
//Not enough money! You need 180.00 leva. 
fishingBoat(2000, "Winter", 13)
//Yes! You have 50.00 leva left.