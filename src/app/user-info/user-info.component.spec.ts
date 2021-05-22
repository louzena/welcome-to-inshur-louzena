import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserProfile } from '../shared/model/user/UserProfile.model';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  let userProfile = new UserProfile();
  userProfile.name = 'Joe Bloggs';
  userProfile.jobTitle = 'Web Developer';
  userProfile.email = 'joebloggs@someemail.com';
  userProfile.dob = '1st January 1985';

  let heading2 : DebugElement;
  let heading4 : DebugElement;
  let listItems : DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    component.userProfile = userProfile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display User Profile name', () => {
    heading2 = fixture.debugElement.query(By.css('h2'));  
    expect(heading2.nativeElement.textContent).toEqual('Joe Bloggs');
  });

  it('should display User Profile job title', () => {
    heading4 = fixture.debugElement.query(By.css('h4'));  
    expect(heading4.nativeElement.textContent).toEqual('Web Developer');
  });

  it('should create two li', () => {
    listItems = fixture.debugElement.queryAll(By.css('li'));
    expect(listItems.length).toBe(2);   
  });

  it('should contain UserProfile dob ', () => {
    listItems = fixture.debugElement.queryAll(By.css('li'));
    let listItemsText : string[] = listItems.map( liElement => {
      return liElement.nativeElement.textContent;
    } ) as string[] ;
    
    expect(listItemsText.indexOf(' BORN: 1st January 1985')).toBeGreaterThan(-1);   
  });

  it('should contain UserProfile email ', () => {
    listItems = fixture.debugElement.queryAll(By.css('li'));
    let listItemsText : string[] = listItems.map( liElement => {
      return liElement.nativeElement.textContent;
    } ) as string[] ;

   
    expect(listItemsText.indexOf(' EMAIL: joebloggs@someemail.com')).toBeGreaterThan(-1);   
  });





});
