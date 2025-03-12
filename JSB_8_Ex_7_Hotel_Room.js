function hotelRoom(month, nights) {
    let priceAp = 0;
    let priceSt = 0;
    switch (month) {
        case "May":
        case "October":
            priceAp = nights * 65;
            priceSt = nights * 50;
            if(nights > 14) {priceSt *= 0.7;}
            else if (nights > 7) {priceSt *= 0.95;}
            break;
        case "June":
        case "September":
            priceAp = nights * 68.7;
            priceSt = nights * 75.2;
            if (nights > 14) {priceSt *= 0.8;}
            break;
        case "July":
        case "August":
            priceAp = nights * 77;
            priceSt = nights * 76;
            break;
        default:
            break;
    }
    if(nights > 14){priceAp *= 0.9;}
    console.log(`Apartment: ${priceAp.toFixed(2)} lv.`);
    console.log(`Studio: ${priceSt.toFixed(2)} lv.`);
    
}

hotelRoom("May", 15)
//Apartment: 877.50 lv. 
// Studio: 525.00 lv. 

hotelRoom("June", 14)
//Apartment: 961.80 lv. 
// Studio: 1052.80 lv. 
hotelRoom("August", 20)
//Apartment: 1386.00 lv. 
// Studio: 1520.00 lv.