import { Component, Injector, VERSION } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup/popup.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define("popup-element", PopupElement);
  }
}
