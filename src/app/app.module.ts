import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomgeneratedpasswordComponent } from './randomgeneratedpassword/randomgeneratedpassword.component';

@NgModule({
  declarations: [AppComponent, RandomgeneratedpasswordComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
