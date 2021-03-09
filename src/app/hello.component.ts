import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Example project explaining Angular Elements and Web Custom Elements</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
