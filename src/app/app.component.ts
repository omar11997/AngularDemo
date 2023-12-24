import { Component } from '@angular/core';
//// @Component is the decorator function that indicate that this class will be component
@Component({
  selector: 'app-root', ///Component Directive {use this directive to show
  ///this compnetent inside specific place in the page like html tag  }
  templateUrl: './app.component.html', /// where the Html file
  styleUrls: ['./app.component.css'], /// where the Css of the Component
})
export class AppComponent {
  title = 'AngularDemo';
  sayHello(): string {
    return `Hello World ${this.title}`;
  }
}
