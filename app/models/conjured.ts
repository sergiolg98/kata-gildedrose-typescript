import { GildedRoseItemMethodFactory } from "../util/item-factory-method";
import { Item } from "./item";

export class Conjured extends GildedRoseItemMethodFactory{ 

    constructor(item: Item){
        super(item);
    }

    updateValues(): void {
        if(!this.isSellInExpired()){
            this.decrementTwiceQuality(1); //lower -2
        } else {
            this.decrementTwiceQuality(2); //lower -4
        }
        this.decrementSellIn(); 
    }
}