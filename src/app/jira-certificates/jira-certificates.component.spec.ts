import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraCertificatesComponent } from './jira-certificates.component';

describe('JiraCertificatesComponent', () => {
  let component: JiraCertificatesComponent;
  let fixture: ComponentFixture<JiraCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
