import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserProfile } from "src/app/shared/model/user/UserProfile.model";

@Injectable()
export class MockUserProfileService {

    public getUserDetails(): Observable<UserProfile> {      
        let userProfile = new UserProfile();
        userProfile.name = 'Joe Bloggs';
        userProfile.jobTitle = 'Web Developer';
        userProfile.email = 'joebloggs@someemail.com';
        userProfile.dob = '1st January 1985';
        userProfile.interests = 'Chess and computer games';
        userProfile.aboutHTML = '<p> Lorem ipsum <i> Joe Bloggs <i/> </p>';

        return of(userProfile);
      }

}