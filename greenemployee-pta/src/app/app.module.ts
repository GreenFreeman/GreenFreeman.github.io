import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SingleSignOnService } from './data/single-sign-on.service';
import { SafePipe } from './directives/pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [SingleSignOnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
