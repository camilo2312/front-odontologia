import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterUserComponent } from './regiter-user.component';

describe('RegiterUserComponent', () => {
  let component: RegiterUserComponent;
  let fixture: ComponentFixture<RegiterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiterUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
