import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private afDB: AngularFirestore) { }


   verificaUsuario(senha: string) {

    senha = senha.toLocaleLowerCase();

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise( (resolve, reject) => {
    this.afDB.doc('/usuarios/${ senha }').valueChanges().subscribe(data => {
      console.log(data);
      resolve();

    });
    });
  }
}
