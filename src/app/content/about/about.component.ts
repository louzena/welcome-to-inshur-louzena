import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/shared/model/user/UserProfile.model';
import { UserProfileService } from '../../shared/services/user-profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userProfile : UserProfile;

  constructor(private userProfileService: UserProfileService) { 

    this.userProfileService.getUserDetails().subscribe(data => {
      console.log(data);     
      this.userProfile = data;       
    });
  }

  ngOnInit(): void {
  }

}
