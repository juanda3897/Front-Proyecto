import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldloginComponent } from './formfieldlogin.component';

describe('FormfieldloginComponent', () => {
  let component: FormfieldloginComponent;
  let fixture: ComponentFixture<FormfieldloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfieldloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
