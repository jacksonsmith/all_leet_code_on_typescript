function numWaterBottles(numBottles: number, numExchange: number): number {
    let drinkCount = 0    
    let fullBottles =  numBottles
    let emptyBottles =  0

    while (fullBottles > 0) { 
        drinkCount += fullBottles 
        emptyBottles = emptyBottles + fullBottles 
        
        fullBottles = Math.floor(emptyBottles / numExchange)

        emptyBottles = Math.floor(emptyBottles % numExchange) 
    }
//
    return drinkCount
};