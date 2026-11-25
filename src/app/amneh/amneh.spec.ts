import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Amneh } from './amneh';

describe('Amneh', () => {
  let component: Amneh;
  let fixture: ComponentFixture<Amneh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Amneh],
    }).compileComponents();

    fixture = TestBed.createComponent(Amneh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
