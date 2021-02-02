import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertaPage } from './alerta.page';

describe('AlertaPage', () => {
  let component: AlertaPage;
  let fixture: ComponentFixture<AlertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
