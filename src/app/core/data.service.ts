import { Injectable } from '@angular/core';
import { InventoryData, UnitType } from './model/inventory-data.model';
import { ProjectData } from './project/project-data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  inventoryData: InventoryData = {
    items: [
      {
        id: 1,
        name: 'Screws 5x40',
        description: 'Multipurpose screws mainly for wood and furniture.',
        quantityInfo: {
          type: UnitType.NUMBER,
          inventory: 10,
          shoppingList: 25,
        },
      },
      {
        id: 2,
        name: 'Plywood 200x200x5',
        description: 'Wooden plate for furniture.',
        quantityInfo: {
          type: UnitType.SIZE_CM2,
          inventory: 0,
          shoppingList: 2,
          dimensions: {
            width: 200,
            height: 200,
            depth: 5,
          },
        },
      },
      {
        id: 3,
        name: 'Pipe 10x10x500',
        description: 'Pipe for plumber usage.',
        quantityInfo: {
          type: UnitType.SIZE_CM2,
          inventory: 3,
          shoppingList: 0,
          dimensions: {
            width: 200,
            height: 200,
            depth: 5,
          },
        },
      },
      {
        id: 4,
        name: 'Fitting 10x10',
        description: 'Fitting for plumber usage.',
        quantityInfo: {
          type: UnitType.SIZE_CM2,
          inventory: 0,
          shoppingList: 0,
          dimensions: {
            width: 10,
            height: 10,
          },
        },
      },
    ],
  };

  projectData: ProjectData = {
    projects: [
      {
        id: 0,
        name: 'Lighthouse Renovation',
        description: 'Renovate the bathroom floors of the Lighthouse',
        inventoryItems: {
          items: []
        },
      },
      {
        id: 1,
        name: 'Bathroom - Private House 52c',
        description: 'Create a bathroom in the first floor of a newly created standalone house. Should contain: shower, bath, sink, toilet.',
        inventoryItems: {
          items: []
        },
      },
    ],
  };

  constructor() {}
}
