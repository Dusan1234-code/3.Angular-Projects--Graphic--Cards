import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizingComponent } from './page-sizing.component';

describe('PageSizingComponent', () => {
  let component: PageSizingComponent;
  let fixture: ComponentFixture<PageSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
