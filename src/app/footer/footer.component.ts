import { Component, OnInit } from '@angular/core';
import { faVk, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./css/footer.component.css', './css/mobile.footer.component.css']
})

export class FooterComponent implements OnInit {
  faVk=faVk;
  faInstagram=faInstagram;
  faWhatsapp=faWhatsapp;
  
  constructor() { }

  ngOnInit(): void {
  }

}
