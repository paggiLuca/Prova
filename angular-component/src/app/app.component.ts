import { Component } from '@angular/core';
import { Email } from './models/email.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component';

  vettEmail : Email[] = [];

  sendEmail(a:HTMLInputElement, ogg:HTMLInputElement,txt:HTMLInputElement){
    
    let e : Email = new Email(a.value, ogg.value, txt.value);

  }
}
