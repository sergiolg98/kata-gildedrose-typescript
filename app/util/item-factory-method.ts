import { Item } from "../models/item";

export abstract class GildedRoseItemMethodFactory {

    item: Item
    constructor(item: Item){
        this.item = item;
    }

    incrementQuality(): void {
        if(this.notMaximumQuality())
            this.item.quality = this.item.quality + 1;
    }

    decrementQuality(): void {
        if(this.stillPositiveQuality())
            this.item.quality = this.item.quality -1;
    }

    decrementTwiceQuality(factor: number): void {
        if(this.stillPositiveQuality())
            this.item.quality = this.item.quality -(2*factor);
    }

    emptyQuality(): void {
        this.item.quality = 0;
    }

    notMaximumQuality(): boolean {
        return this.item.quality < 50 ;
    }

    stillPositiveQuality(): boolean {
        return this.item.quality > 0;
    }

    decrementSellIn(): void {
        this.item.sellIn = this.item.sellIn -1;
    }

    isSellInExpired(): boolean {
        return this.expiresIn(0);
    }

    expiresIn(days: number): boolean {
        return this.item.sellIn <= days;
    }
}