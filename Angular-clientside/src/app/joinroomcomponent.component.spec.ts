import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinroomcomponentComponent } from './joinroomcomponent.component';

describe('JoinroomcomponentComponent', () => {
  let component: JoinroomcomponentComponent;
  let fixture: ComponentFixture<JoinroomcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinroomcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinroomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
