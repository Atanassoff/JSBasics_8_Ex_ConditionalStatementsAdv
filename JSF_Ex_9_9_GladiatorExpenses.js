function gladiatorExpenses(losses, helmet, sword, shield, armor){
    let helmetCount = 0; let swordCount = 0; let shieldCount = 0; let armorCount = 0;
    for(let i = 1; i <= losses; i++){
        if(i % 2 === 0){helmetCount++;}
        if(i % 3 === 0){swordCount++;}
        if(i % 6 === 0){shieldCount++;}
        if(i % 12 === 0){armorCount++;}
    }
    let sum = helmetCount * helmet + swordCount * sword + shieldCount * shield + armorCount * armor; 
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5) 
//Gladiator expenses: 16.00 aureus 
gladiatorExpenses(23, 12.50, 21.50, 40, 200) 
//Gladiator expenses: 608.00 aureus