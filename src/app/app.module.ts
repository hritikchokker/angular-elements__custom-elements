import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, PopupComponent],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule {}
