import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinhasPageRoutingModule } from './linhas-routing.module';

import { LinhasPage } from './linhas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinhasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LinhasPage]
})
export class LinhasPageModule {}
