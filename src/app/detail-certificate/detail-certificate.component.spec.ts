import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCertificateComponent } from './detail-certificate.component';

describe('DetailCertificateComponent', () => {
  let component: DetailCertificateComponent;
  let fixture: ComponentFixture<DetailCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
