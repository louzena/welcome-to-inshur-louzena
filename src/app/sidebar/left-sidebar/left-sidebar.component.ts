import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/shared/model/user/UserProfile.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  @Input() userProfile : UserProfile;
  // TODO - Move to user profile service
  profilePicPath : string = '../assets/louzena-pic.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
