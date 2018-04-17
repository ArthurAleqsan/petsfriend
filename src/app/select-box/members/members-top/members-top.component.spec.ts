import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersTopComponent } from './members-top.component';

describe('MembersTopComponent', () => {
  let component: MembersTopComponent;
  let fixture: ComponentFixture<MembersTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
