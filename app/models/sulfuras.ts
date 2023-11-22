import { GildedRoseItemMethodFactory } from "../util/item-factory-method";
import { Item } from "./item";

export class Sulfuras extends GildedRoseItemMethodFactory {

    constructor(item: Item){
        super(item);
    }
    
    updateValues(): void {}

}