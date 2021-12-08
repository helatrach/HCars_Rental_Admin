import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DeleteCarModalComponent } from './components/delete-car-modal/delete-car-modal.component';
import { AddOrEditCarModalComponent } from './components/add-or-edit-car-modal/add-or-edit-car-modal.component';
import { ShowCarComponent } from './components/show-car/show-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteCarModalComponent,
    AddOrEditCarModalComponent,
    ShowCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
