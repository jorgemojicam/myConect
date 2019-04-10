import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectListHeaderComponent } from './conect-list-header.component';

describe('ConectListHeaderComponent', () => {
  let component: ConectListHeaderComponent;
  let fixture: ComponentFixture<ConectListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
