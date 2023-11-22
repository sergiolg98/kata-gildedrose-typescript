import { GildedRoseItemMethodFactory } from "../util/item-factory-method";
import { Item } from "./item";

export class Backstage extends GildedRoseItemMethodFactory{

    constructor(item: Item){
        super(item);
    }

    updateValues(): void {
        this.incrementQuality();
        if (this.expiresIn(10)){ 
            this.incrementQuality();
        }
        if(this.expiresIn(5)){
            this.incrementQuality();
        }
        if(this.isSellInExpired()){
            this.emptyQuality();
        }
        this.decrementSellIn();
    }
}