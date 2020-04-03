import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../providers/usuario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  constructor(public alertController: AlertController,
              public loadingCtrl: LoadingController
/*               public navCtrl: AlertController,
              // tslint:disable-next-line: variable-name*/
             /*  public usuarioProv: UsuarioService */)  { }
/*
  public title: string; */

  ngOnInit() {
  }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Cadastro realizado com sucesso!',
     /*    subHeader: 'Subtitle',
        message: 'This is an alert message.', */
        buttons: ['OK'],
      });
      await alert.present();
    }

  /*   this.alertCtrl.create({
      header:  'Conta criada!',
    }).then(alert => alert.present()); */

    /* verificarUsuario( senha: string) {
    this._usuarioProv.verificaUsuario(senha).then();
    } */

     onSubmit(form: NgForm) {
     console.log(form);
    }


    cadastrar(emailCtrl: string, nomeCriar: string, senhaCriar: string ) {
      console.log('email: ' + emailCtrl + ' nome: ' + nomeCriar + ' senha: ' + senhaCriar);
    }
  }




