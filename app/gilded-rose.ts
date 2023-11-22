import { Item } from "./models/item";
import { ItemCreator } from "./util/item-creator";

export class GildedRose {

    items: Array<Item>;
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        for (const item of this.items) {
            ItemCreator.buildItem(item).updateValues();
        }
        return this.items;
    }
}
