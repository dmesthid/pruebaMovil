import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

import { PiedPaginaComponent } from './pied-pagina/pied-pagina.component';
import { AlertaPage } from '../pagina/alerta/alerta.page';
import { InicioPage } from '../pagina/inicio/inicio.page';
import { ActionSheetPage } from '../pagina/action-sheet/action-sheet.page';



@NgModule({
  declarations: [HeaderComponent,PiedPaginaComponent,
    
  ],
  exports: [HeaderComponent,PiedPaginaComponent],
  imports: [
    CommonModule,
    IonicModule,
    

  ]
})
export class ComponentsModule { }
