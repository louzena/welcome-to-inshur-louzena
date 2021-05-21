import { Component, Input } from '@angular/core';
import { UserProfile } from './shared/model/user/UserProfile.model';
import { UserProfileService } from './shared/services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome-to-inshur-louzena';

  @Input () userProfile : UserProfile = new UserProfile();

  constructor(private userProfileService: UserProfileService) { 

    this.userProfileService.getUserDetails().subscribe(data => {
      //console.log(data);    
      // Get user details at start-up 
      this.userProfile = data;       
    });
  }
}



