import { GildedRoseItemMethodFactory } from "../util/item-factory-method";
import { Item } from "./item";

export class Normal extends GildedRoseItemMethodFactory {
    
    constructor(item: Item){
        super(item);
    }

    updateValues(): void {
        this.decrementQuality();
        if(this.isSellInExpired()){
            this.decrementQuality();
        }
        this.decrementSellIn();
    }
}