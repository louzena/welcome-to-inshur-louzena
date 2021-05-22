import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserProfile } from './shared/model/user/UserProfile.model';
import { UserProfileService } from './shared/services/user-profile.service';

describe('AppComponent', () => {
 
  let userProfileService : UserProfileService;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let userProfileServiceSpy: jasmine.SpyObj<UserProfileService>;

  let userProfile = new UserProfile();
  userProfile.name = 'Joe Bloggs';
  userProfile.jobTitle = 'Web Developer';
  userProfile.email = 'joebloggs@someemail.com';
  userProfile.dob = '1st January 1985';
  userProfile.interests = 'Chess and computer games';
  userProfile.aboutHTML = '<p> Lorem ipsum <i> Joe Bloggs <i/> </p>';

  
  beforeEach(async () => {

    const spy = jasmine.createSpyObj('UserProfileService', ['getUserDetails']);
    

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [       
        { provide: userProfileService, useValue: spy }
      ]
    }).compileComponents();
   
    userProfileService = TestBed.inject(UserProfileService);   
    userProfileServiceSpy = TestBed.inject(UserProfileService) as jasmine.SpyObj<UserProfileService>; 
    
    spy.getUserDetails.and.returnValue(userProfile);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;   
    component.userProfile = null; // set to null initially 
    fixture.detectChanges();
  });

  it('should create the app', () => {   
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Louise Zenasni'`, () => {   
    expect(component.title).toEqual('Louise Zenasni');
  });

  it('should use UserProfileService', () => {
   
    expect(component.userProfile).not.toBeNull();
  });



  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('welcome-to-inshur-louzena app is running!');
  // });
});
