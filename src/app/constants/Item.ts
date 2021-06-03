export interface Item {
    id : string,
    name : string,
    type: ItemType
}

export enum ItemType {
    Fruit = 'fruit',
    Vegetable = 'vegetable',
}