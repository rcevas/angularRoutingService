import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpContactsComponent } from './http-contacts.component';

describe('HttpContactsComponent', () => {
  let component: HttpContactsComponent;
  let fixture: ComponentFixture<HttpContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
