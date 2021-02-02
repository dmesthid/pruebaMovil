import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Menu } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private ruta:Router,
    private menuCtrl: MenuController,
    private serv: DataService
    ) { }
  //crear array
  //nombre: any[]=[]    array de  textos
  //nombre: any[]=["dsdsd","dddd",4]    array de  textos
  //nombre: any{}=[{},{},{}]      array de objetos
 // m1: Menu={nombre: "alerta", icono:'alarm-outline', ruta:'/alerta'};
 // m2: Menu={nombre: "action-Sheet", icono:'list-outline', ruta:'/action-sheet'};
 //ArrayMenu: Menu[]=[this.m1,this.m2];
 ArrayMenu: Observable<Menu[]>;
 
 ngOnInit() {
   this.ArrayMenu=this.serv.getMenuItem();
 }
 //creando medoto
 navegar(pagina: String){
   pagina="/"+pagina;
   this.ruta.navigate([(pagina)]);
 }
 mostrarMenu(){
   this.menuCtrl.open("menuinicio")
 }

}
