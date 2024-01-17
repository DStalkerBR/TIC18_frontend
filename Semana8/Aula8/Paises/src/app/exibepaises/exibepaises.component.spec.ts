import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibepaisesComponent } from './exibepaises.component';

describe('ExibepaisesComponent', () => {
  let component: ExibepaisesComponent;
  let fixture: ComponentFixture<ExibepaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibepaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibepaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
