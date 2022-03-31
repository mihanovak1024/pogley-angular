import { InventoryData } from '../model/inventory-data.model';

export class ProjectData {
  constructor(public projects: Project[]) {}
}

export class Project {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public inventoryItems: InventoryData
  ) {}
}
