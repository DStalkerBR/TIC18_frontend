import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservadorComponent } from './observador.component';

describe('ObservadorComponent', () => {
  let component: ObservadorComponent;
  let fixture: ComponentFixture<ObservadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
