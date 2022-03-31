export class InventoryData {
  constructor(public items: Item[]) {}
}

export class Item {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public quantityInfo: QuantityInfo
  ) {}
}

export class QuantityInfo {
  constructor(
    public type: UnitType,
    public inventory: number,
    public shoppingList: number,
    public dimensions?: Dimensions
  ) {}
}

export class Dimensions {
  constructor(
    public width?: number,
    public height?: number,
    public depth?: number
  ) {}
}

/**
 * Types:
 * 0 - number of units
 * 1 - length of units - mm
 * 2 - length of units - cm
 * 3 - length of units - m
 * 4 - size of units - mm2
 * 5 - size of units - cm2
 * 6 - size of units - m2
 */
export enum UnitType {
  NUMBER,
  LENGTH_MM,
  LENGTH_CM,
  LENGTH_M,
  SIZE_MM2,
  SIZE_CM2,
  SIZE_M2,
}
