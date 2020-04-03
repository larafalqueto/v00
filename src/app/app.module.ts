import { AngularFireAuthModule } from 'angularfire2/auth';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../config/firebase.config';
import { PersonsComponent } from './components/persons/persons-input.component';


import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent, PersonsComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule , IonicModule.forRoot(), AppRoutingModule, ComponentsModule, AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig) , AngularFirestoreModule, AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    NativeGeocoder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
