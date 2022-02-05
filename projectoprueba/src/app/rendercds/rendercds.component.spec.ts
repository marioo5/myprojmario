import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendercdsComponent } from './rendercds.component';

describe('RendercdsComponent', () => {
  let component: RendercdsComponent;
  let fixture: ComponentFixture<RendercdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendercdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendercdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
