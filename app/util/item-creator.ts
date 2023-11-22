import { Item } from "../models/item";
import { Normal } from "../models/normal";
import { AgedBrie } from "../models/aged-brie";
import { Backstage } from "../models/backstage";
import { Sulfuras } from "../models/sulfuras";
import { Conjured } from "../models/conjured";


enum ItemTypes  { 
    AGEDBRIE = 'Aged Brie',
    SULFURAS = 'Sulfuras, Hand of Ragnaros',
    BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert',
    CONJURED =  'Conjured Mana Cake'
}

export class ItemCreator {

    static buildItem(item: Item): AgedBrie | Backstage | Sulfuras | Conjured | Normal {
        switch(item.name){
            case ItemTypes.AGEDBRIE:
                return new AgedBrie(item);
            case ItemTypes.BACKSTAGE:
                return new Backstage(item);
            case ItemTypes.SULFURAS:
                return new Sulfuras(item);
            case ItemTypes.CONJURED:
                return new Conjured(item);
            default:
                return new Normal(item);
        }
    }
}