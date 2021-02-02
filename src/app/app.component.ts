import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Menu } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Personas } from './interfaces/intefas2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private serv: DataService

  ) {
    this.initializeApp();
    
  }
  ArrayMenu: Observable<Menu[]>;
  ArrayPersona: Observable<Personas[]>;
  ngOnInit() {
    this.ArrayMenu=this.serv.getMenuItem();
    this.ArrayPersona=this.serv.getPersonas();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
      
    });
  }
}
