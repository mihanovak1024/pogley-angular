import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './core/inventory/inventory.component';
import { HomeComponent } from './core/home/home.component';
import { ProjectShortComponent } from './core/home/project-short/project-short.component';
import { ShortenPipe } from './core/home/project-short/shorten.pipe';
import { ProjectComponent } from './core/project/project.component';
import { ShoppingListComponent } from './core/shopping-list/shopping-list.component';
import { UnderlineDirective } from './common/underline.directive';
import { ItemDetailsComponent } from './core/inventory/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    HomeComponent,
    ProjectShortComponent,
    ShortenPipe,
    ProjectComponent,
    ShoppingListComponent,
    UnderlineDirective,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
