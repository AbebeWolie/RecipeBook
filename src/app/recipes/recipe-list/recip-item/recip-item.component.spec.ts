import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipItemComponent } from './recip-item.component';

describe('RecipItemComponent', () => {
  let component: RecipItemComponent;
  let fixture: ComponentFixture<RecipItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
