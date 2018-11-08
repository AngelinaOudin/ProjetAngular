import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionReactiveFormComponent } from './connection-reactive-form.component';

describe('ConnectionReactiveFormComponent', () => {
  let component: ConnectionReactiveFormComponent;
  let fixture: ComponentFixture<ConnectionReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
