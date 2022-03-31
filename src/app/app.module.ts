import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './core/inventory/inventory.component';
import { HomeComponent } from './core/home/home.component';
import { ProjectShortComponent } from './core/home/project-short/project-short.component';
import { ShortenPipe } from './core/home/project-short/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    HomeComponent,
    ProjectShortComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
