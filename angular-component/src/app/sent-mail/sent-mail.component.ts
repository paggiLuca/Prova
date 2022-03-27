import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Email } from '../models/email.models'; 


@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})

export class SentMailComponent implements OnInit {
  @Input()email : Email = null!;
  show = false; 
  @HostBinding("class") cssColor = "white"
  constructor() { }

  ngOnInit(): void {
  }

  ShowHide(){
    this.show = !this.show; 
  }

  specializza(){
    if(this.cssColor == "white")this.cssColor = "yellow"
    else this.cssColor = "white"
  
  
  }
}
