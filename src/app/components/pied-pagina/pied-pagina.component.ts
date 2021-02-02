import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InicioPage } from '../../pagina/inicio/inicio.page';
import { AlertaPage } from '../../pagina/alerta/alerta.page';
import { ActionSheetPage } from '../../pagina/action-sheet/action-sheet.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pied-pagina',
  templateUrl: './pied-pagina.component.html',
  styleUrls: ['./pied-pagina.component.scss'],
})
export class PiedPaginaComponent implements OnInit {
   inicio :InicioPage;
  constructor(private ruta:Router) { 

    
  }
  navegar(pagina: String){
    pagina="/"+pagina;
    this.ruta.navigate([(pagina)]);
  }
  ngOnInit() {}

}
