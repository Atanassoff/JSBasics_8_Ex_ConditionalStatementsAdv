function journey(budget, season) {
    let destination = "";
    let accommodation = "";
    let sum = 0;

    switch (season) {
        case "summer":
            accommodation = "Camp";
            break;
        case "winter":
            accommodation = "Hotel";
            break;
        default:
            break;

    }
    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                sum = budget * 0.3;
                break;
            case "winter":
                sum = budget * 0.7;
                break;
            default:
                break;
        }
    } 
    else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                sum = budget * 0.4;
                break;
            case "winter":
                sum = budget * 0.8;
                break;
            default:
                break;
        }
    } 
    else if (budget > 1000) {
        destination = "Europe";
        accommodation = "Hotel";
        sum = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${sum.toFixed(2)}`);

}
journey(50, "summer")
//Somewhere in Bulgaria Camp - 15.00
journey(75, "winter")
//Somewhere in Bulgaria Hotel - 52.50
journey(312, "summer")
//Somewhere in Balkans Camp - 124.80
journey(678.53, "winter")
//Somewhere in Balkans Hotel - 542.82
journey(1500, "summer")
//Somewhere in Europe Hotel - 1350.00