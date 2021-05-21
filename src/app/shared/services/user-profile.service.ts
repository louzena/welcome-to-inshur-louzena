import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserProfile } from '../model/user/UserProfile.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class UserProfileService {

    private userServiceURL : string =  '/api/user';

    constructor(private httpClient : HttpClient) {}
    
    /**
     * Gets the user profile details
     * @returns Observable<UserProfile>
     */
    getUserDetails() : Observable<UserProfile>{

        return this.httpClient
            .get<UserProfile>(this.userServiceURL)
                .pipe(
                    // RxJS operator
                    map( response => Object.assign(new UserProfile(), response) ),
                    catchError(this.errorHandler)
                )
        
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "server error.");
    }

}