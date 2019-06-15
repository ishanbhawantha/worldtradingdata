export class performanceDto {
    
     symbol: string;
     startDate:string;
     endDate:string;
     startPrice:number;
     endPrice:number;
     totalReturn:number;
     periodLow:number;
     periodHigh:number;

     constructor(userResponce:any) {
        //In this method came a data
        this.symbol = userResponce.name;
        this.startDate = userResponce.history[0].date;
        this.endDate = this.findEndDate(userResponce.history);
        
        var startPrice = userResponce.history[0].data.close;
        var endPrice = this.findEndPrice(userResponce.history);
        
        this.startPrice = startPrice;
        this.endPrice = endPrice;

        this.totalReturn = endPrice - startPrice;
        this.periodLow = this.findPeriodLow(userResponce.history);
        this.periodHigh = this.findPeriodHigh(userResponce.history);
     }

     findEndDate(methodInput) : string{
         //find the Last date of the Object
        var lastItem = methodInput.length;
        return methodInput[lastItem-1].date;
    }

    findEndPrice(methodInput) : number{
        //Find the END Price of the object within the Period
        var lastItem = methodInput.length;
        return methodInput[lastItem-1].data.close;
    }

    findPeriodLow(methodInput): number{
        //Find the Lowest price of the object within the Period
        var arrayLength = methodInput.length;
        var lowest = parseFloat(methodInput[0].data.low);
        
        for(var counter:number = 0; counter <= arrayLength-1; counter++){           
            var temp = parseFloat(methodInput[counter].data.low);
            if( temp < lowest){
                lowest = temp;
            }
        }
        return lowest;
    }

    findPeriodHigh(methodInput): number{
        //Find the Highest price of the object within the Period
        var arrayLength = methodInput.length;
        var highest = parseFloat(methodInput[0].data.low);
        
        for(var counter:number = 0; counter <= arrayLength-1; counter++){           
            var temp = parseFloat(methodInput[counter].data.high);
            if( temp > highest){
                highest = temp;
            }
        }
        return highest;
    }

}