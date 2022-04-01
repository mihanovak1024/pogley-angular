import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { InventoryData, Item } from '../model/inventory-data.model';
import { Project, ProjectData } from '../project/project-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  data: InventoryData;
  projectData: ProjectData;

  constructor(private dataService: DataService, private router: Router) {
    this.data = dataService.inventoryData;
    this.projectData = dataService.projectData;
  }

  ngOnInit(): void {

  }

  getEmptyInventoryItems(): number {
    return this.data.items.filter((item) => item.quantityInfo.inventory === 0).length
  }

  getShoppingListItems(): number {
    return this.data.items.filter((item) => item.quantityInfo.shoppingList > 0).length
  }

  // The navigation could also happen in ProjectShortComponent,
  // but I wanted to test out the @Output annotation.
  onProjectClicked(project: Project) {
    this.router.navigate([`/projects/${project.id}`]);
  }

}
