function summerOutfit(degree, time) {
    let outfit = "";
    let shoes = "";
    switch (time) {
        case "Morning":
            if (degree >= 10 && degree <= 18) {outfit = "Sweatshirt"; shoes = "Sneakers";}
            if (degree > 18 && degree <= 24) {outfit = "Shirt"; shoes = "Moccasins";}
            if (degree >= 25) {outfit = "T-Shirt"; shoes = "Sandals";}
            break;
        case "Afternoon":
            if (degree >= 10 && degree <= 18) {outfit = "Shirt"; shoes = "Moccasins";}
            if (degree > 18 && degree <= 24) {outfit = "T-Shirt"; shoes = "Sandals";}
            if (degree >= 25) {outfit = "Swim Suit"; shoes = "Barefoot";} 
            break;
        case "Evening":
            outfit = "Shirt"; shoes = "Moccasins";
            break;
        default:
            break;
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(16, "Morning")
//It's 16 degrees, get your Sweatshirt and Sneakers.
summerOutfit(22, "Afternoon")
//It's 22 degrees, get your T-Shirt and Sandals.
summerOutfit(28, "Evening")
//It's 28 degrees, get your Shirt and Moccasins.

