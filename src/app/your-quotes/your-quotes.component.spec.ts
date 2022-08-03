import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourQuotesComponent } from './your-quotes.component';

describe('YourQuotesComponent', () => {
  let component: YourQuotesComponent;
  let fixture: ComponentFixture<YourQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
