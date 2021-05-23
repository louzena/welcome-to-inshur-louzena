import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserProfile } from './shared/model/user/UserProfile.model';
import { UserProfileService } from './shared/services/user-profile.service';
import { MockUserProfileService } from '../testing/shared/services/MockUserProfileService';
import { Mock } from 'protractor/built/driverProviders';
import { LeftSidebarComponent } from './sidebar/left-sidebar/left-sidebar.component';
import { AboutComponent } from './content/about/about.component';
import { SkillsInfoComponent } from './content/skills-info/skills-info.component';
import { ContactFormComponent } from './content/contact-form/contact-form.component';
import { RightSidebarComponent } from './sidebar/right-sidebar/right-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { QuoteComponent } from './widgets/quote/quote.component';
import { UserInfoComponent } from './user-info/user-info.component';

describe('AppComponent', () => {
 
  let userProfileService : UserProfileService;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let mockUserProfileService : MockUserProfileService
  
  beforeEach(async () => { 
    

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
        
      ],
      declarations: [
        AppComponent,
        LeftSidebarComponent,
        AboutComponent,
        SkillsInfoComponent,
        ContactFormComponent,
        RightSidebarComponent,
        HeaderComponent,
        SocialMediaComponent,
        QuoteComponent,
        UserInfoComponent
      ],
      providers: [       
        { provide: userProfileService, useClass: MockUserProfileService }
        
      ]
    }).compileComponents();   

    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;       
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

  it('should retrieve a user Profile', () => {
    expect(component.userProfile).not.toBeNull();
    //expect(component.userProfile.name).toEqual('Joe Bloggs');
  });


});
