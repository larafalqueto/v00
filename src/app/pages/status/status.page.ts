import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(private menu: MenuController) {}

  toggleMenu() {
    this.menu.toggle();
  }


  ngOnInit() {
  }

}
