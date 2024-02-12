import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadeComponent } from './universidade.component';

describe('UniversidadeComponent', () => {
  let component: UniversidadeComponent;
  let fixture: ComponentFixture<UniversidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
