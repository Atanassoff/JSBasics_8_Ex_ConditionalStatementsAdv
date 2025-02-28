function townInfo(town, people, area){
    if(town.length >= 3 && people >= 0 && area >= 0){
    console.log(`Town ${town} has population of ${people} and area ${area} square km.`);
    }
    else if(town.length < 3 && people < 0 && area < 0){
        console.log("Town name must be at least 3 characters!");
        console.log("Population must be a positive number!");
        console.log("Area must be a positive number!");
    }
    else if(town.length < 3 && people < 0){
        console.log("Town name must be at least 3 characters!");
        console.log("Population must be a positive number!");
    }
    else if(town.length < 3 && area < 0){
        console.log("Town name must be at least 3 characters!");
        console.log("Area must be a positive number!");
    }
    else if(people < 0 && area < 0){
        console.log("Population must be a positive number!");
        console.log("Area must be a positive number!");
    }
    else if(town.length < 3){
        console.log("Town name must be at least 3 characters!");
    }
    else if(people < 0){
        console.log("Population must be a positive number!");
    }
    else if(area < 0){
        console.log("Area must be a positive number!");
    }
}

townInfo('Sofia', 1286383, 492) 
//Town Sofia has population of 1286383 and area 492 square km.
townInfo('Plovdiv', 1481353, 512) 
//Town Plovdiv has population of 1481353 and area 512 square km.