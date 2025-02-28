function spiceMustFlow(startYeald) {
    let totalYeald = 0;
    let days = 0;
    if (startYeald >= 100) {
        for (let i = startYeald; i >= 100; i -= 10) {
            days++;
            totalYeald += (i - 26);
        }
        totalYeald -= 26;
    }
    console.log(`${days}\n${totalYeald}`);
}

spiceMustFlow(111)
//2 134 
spiceMustFlow(450)
//36 8938