import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirecoesPageRoutingModule } from './direcoes-routing.module';

import { DirecoesPage } from './direcoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirecoesPageRoutingModule
  ],
  declarations: [DirecoesPage]
})
export class DirecoesPageModule {}
