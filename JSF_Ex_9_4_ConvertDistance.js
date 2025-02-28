function convertDistances(meters){
    let km = meters / 1000;
    let miles = km * 0.6214;
    console.log(`${meters} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

convertDistances(1852) 
//1.85
convertDistances(798) 
//0.80