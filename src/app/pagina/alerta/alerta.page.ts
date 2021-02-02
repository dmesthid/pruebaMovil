import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private places = [{
    id: '1',
    title: 'daniel',
    imageURL:''
  }]
}
