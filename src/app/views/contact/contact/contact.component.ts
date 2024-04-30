import {Component, OnInit} from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  ngOnInit() {
    window.miFuncion();
  }
}
