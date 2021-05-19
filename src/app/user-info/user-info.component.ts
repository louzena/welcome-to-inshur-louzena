import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../shared/model/user/UserProfile.model';
import { UserProfileService } from '../shared/services/user-profile.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

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
