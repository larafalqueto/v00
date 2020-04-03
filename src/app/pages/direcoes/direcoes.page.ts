import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-direcoes',
  templateUrl: './direcoes.page.html',
  styleUrls: ['./direcoes.page.scss'],
})
export class DirecoesPage implements OnInit {

  constructor(private menu: MenuController) {}

  toggleMenu() {
    this.menu.toggle();
  }

  ngOnInit() {
  }

}
