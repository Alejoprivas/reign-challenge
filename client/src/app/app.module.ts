import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewslistComponent } from './core/components/newslist/newslist.component';
import { HeaderComponent } from './shared/layout/header/header.component';

import {MaterialModule} from './material.module';
import { DateChangerPipe } from './pipes/date-changer.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    NewslistComponent,
    DateChangerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
