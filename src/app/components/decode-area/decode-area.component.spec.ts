import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeAreaComponent } from './decode-area.component';

describe('DecodeAreaComponent', () => {
  let component: DecodeAreaComponent;
  let fixture: ComponentFixture<DecodeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodeAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
