import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInfoComponent } from './skills-info.component';

describe('SkillsInfoComponent', () => {
  let component: SkillsInfoComponent;
  let fixture: ComponentFixture<SkillsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
