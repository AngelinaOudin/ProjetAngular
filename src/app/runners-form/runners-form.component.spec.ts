import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersFormComponent } from './runners-form.component';

describe('RunnersFormComponent', () => {
  let component: RunnersFormComponent;
  let fixture: ComponentFixture<RunnersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
