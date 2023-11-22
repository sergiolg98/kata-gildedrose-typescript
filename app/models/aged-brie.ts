import { GildedRoseItemMethodFactory } from "../util/item-factory-method";
import { Item } from "./item";

export class AgedBrie extends GildedRoseItemMethodFactory{

    constructor(item: Item){
        super(item);
    }

    updateValues(): void {
        this.incrementQuality();
        if (this.isSellInExpired()){
            this.incrementQuality();
        }
        this.decrementSellIn();
    }
}