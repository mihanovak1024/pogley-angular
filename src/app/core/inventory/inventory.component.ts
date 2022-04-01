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

  onSelected(item: Item) {
    if (item === this.selected) {
      this.selected = undefined;
    } else {
      this.selected = item;
    }
  }

  onItemSaved() {
    if (this.selected) {

    }
  }

  onItemDeleted() {
    console.log(this.selected);
    if (this.selected) {
      const list = this.dataService.inventoryData.items.slice().filter((item) => {
        return item.id !== this.selected?.id;
      });
      this.dataService.inventoryData.items = list;
      this.selected = undefined;
    }
  }
}
