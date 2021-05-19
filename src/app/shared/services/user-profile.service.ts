import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from '../model/user/UserProfile.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class UserProfileService {

    private userServiceURL : string =  '/api/user';

    constructor(private httpClient : HttpClient) {}
    
    getUserDetails() : Observable<UserProfile>{

        return this.httpClient
            .get<UserProfile>(this.userServiceURL)
                .pipe(
                    // RxJS operator
                    map( response => Object.assign(new UserProfile(), response) )
                )
        
    }

}