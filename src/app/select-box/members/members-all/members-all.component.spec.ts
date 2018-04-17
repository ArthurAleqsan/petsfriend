import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersAllComponent } from './members-all.component';

describe('MembersAllComponent', () => {
  let component: MembersAllComponent;
  let fixture: ComponentFixture<MembersAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
