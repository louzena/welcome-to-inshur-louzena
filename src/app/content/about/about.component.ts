import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/shared/model/user/UserProfile.model';
import { UserProfileService } from '../../shared/services/user-profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() aboutText : string;

  @ContentChild('contentParagraph', {static: true}) paragraph : ElementRef;

  ngOnInit(): void {
  }

}
