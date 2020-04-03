import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';



@NgModule({
  declarations: [
    MenuComponent,
    LocationPickerComponent,
    MapModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    LocationPickerComponent,
    MapModalComponent
  ],
  entryComponents: [
    MapModalComponent
  ]
})
export class ComponentsModule { }
