import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InventoryData, Item, UnitType } from '../model/inventory-data.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  data: InventoryData;
  selected: Item | undefined;

  constructor(private dataService: DataService) {
    this.data = dataService.inventoryData;
  }

  ngOnInit(): void {}

  isNonNumberUnitType(): boolean {
    if (this.selected) {
      return this.selected.quantityInfo.type != UnitType.NUMBER;
    }
    return false;
  }

  getDimensions(): String {
    if (this.selected) {
      const  dimensions = this.selected.quantityInfo.dimensions;
      if (dimensions) {
        return JSON.stringify(dimensions);
      }
    }
    return "";
  }

  onSelected(item: Item) {
    this.selected = item;
  }
}
