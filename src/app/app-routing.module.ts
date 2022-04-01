import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { InventoryComponent } from './core/inventory/inventory.component';
import { ProjectComponent } from './core/project/project.component';
import { ShoppingListComponent } from './core/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent
},
  {
    path: 'projects/:id',
    component: ProjectComponent
},
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
