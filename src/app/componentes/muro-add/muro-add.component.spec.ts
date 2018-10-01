import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroAddComponent } from './muro-add.component';

describe('MuroAddComponent', () => {
  let component: MuroAddComponent;
  let fixture: ComponentFixture<MuroAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuroAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
