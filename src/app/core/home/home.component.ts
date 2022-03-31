import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InventoryData, Item } from '../model/inventory-data.model';
import { ProjectData } from '../project/project-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: InventoryData;
  projectData: ProjectData;

  constructor(private dataService: DataService) {
    this.data = dataService.inventoryData;
    this.projectData = dataService.projectData;
  }

  ngOnInit(): void {

  }

  getEmptyInventoryItems(): Item[] {
    return this.data.items.filter((item) => item.quantityInfo.inventory === 0)
  }

  getShoppingListItems(): Item[] {
    return this.data.items.filter((item) => item.quantityInfo.shoppingList > 0)
  }

}
