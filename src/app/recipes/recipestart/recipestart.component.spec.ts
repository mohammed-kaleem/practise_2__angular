import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipestartComponent } from './recipestart.component';

describe('RecipestartComponent', () => {
  let component: RecipestartComponent;
  let fixture: ComponentFixture<RecipestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipestartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
