import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserProfile } from 'src/app/shared/model/user/UserProfile.model';
import { SocialMediaComponent } from 'src/app/social-media/social-media.component';
import { UserInfoComponent } from 'src/app/user-info/user-info.component';

import { LeftSidebarComponent } from './left-sidebar.component';

describe('LeftSidebarComponent', () => {
  let component: LeftSidebarComponent;
  let fixture: ComponentFixture<LeftSidebarComponent>;

  let userProfile = new UserProfile();
  userProfile.name = 'Joe Bloggs';
  userProfile.jobTitle = 'Web Developer';
  userProfile.email = 'joebloggs@someemail.com';
  userProfile.dob = '1st January 1985';
  userProfile.interests = 'Chess and computer games';
  userProfile.aboutHTML = '<p> Lorem ipsum <i> Joe Bloggs <i/> </p>';

  let appUserInfoComp : DebugElement;
  let socialMediaComp : DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSidebarComponent, SocialMediaComponent, UserInfoComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();

   
  });



  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it(' Profile Image path should not be empty', () => {    
    expect(component.profilePicPath).not.toBeUndefined();
    expect(component.profilePicPath).not.toBeNull();
    expect(component.profilePicPath).not.toBe('');
  });

  it(' UserInfoComponent should not display if no userProfile object ', () => {    
    // userProfile not set in component yet 
    appUserInfoComp = fixture.debugElement.query(By.css('app-user-info'));
    expect(appUserInfoComp).toBeNull();
  });

  it(' UserInfoComponent should display if userProfile object ', () => {    
    
    component.userProfile = userProfile;
    fixture.detectChanges();
    appUserInfoComp = fixture.debugElement.query(By.css('app-user-info'));    
    expect(appUserInfoComp).toBeDefined();
    
  });

  it('should create social media component', () => {    
    socialMediaComp = fixture.debugElement.query(By.css('app-social-media'));
    expect(socialMediaComp).toBeDefined();
  });

});
