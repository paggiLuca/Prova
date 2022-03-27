import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email.models' ; 


@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  @Input() email : Email = null!; 
  show = false; 
  constructor() { }

  ngOnInit(): void {
  }

  ShowHide(){
    this.show = !this.show; 
  }
}
