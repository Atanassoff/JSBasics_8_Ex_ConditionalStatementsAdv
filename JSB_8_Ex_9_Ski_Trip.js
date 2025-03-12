function skiTrip(nights, room, positiveNegative) {
    nights -= 1;
    let price = 0;
    switch (room) {
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            break;
        case "president apartment":
            price = nights * 35;
            break;
        default:
            break;
    }
    if(room === "apartment" && nights < 10){price *= 0.7;}
    else if((room === "apartment") && nights >= 10 && nights <= 15){price *= 0.65;}
    else if(room === "apartment" && nights > 15){price *= 0.50;}

    if(room === "president apartment" && nights < 10){price *= 0.9;}
    else if((room === "president apartment") && nights >= 10 && nights <= 15){price *= 0.85;}
    else if(room === "president apartment" && nights > 15){price *= 0.80;}

    if(positiveNegative === "positive"){price *= 1.25;}
    else if(positiveNegative === "negative"){price *= 0.9;}

    console.log(price.toFixed(2));
    
}
skiTrip(14, "apartment", "positive")
//264.06 
skiTrip(30, "president apartment", "negative")
//730.80 
skiTrip(12, "room for one person", "positive")
//247.50 
skiTrip(2, "apartment", "positive")
//21.88

//        10  10-15  >15
//ap      30%  35%  50%
//pr ap   10%  15%  20%