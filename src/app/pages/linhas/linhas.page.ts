import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.page.html',
  styleUrls: ['./linhas.page.scss'],
})
export class LinhasPage implements OnInit {

  constructor(private menu: MenuController) {}

  toggleMenu() {
    this.menu.toggle();
  }

  ngOnInit() {
  }

}
