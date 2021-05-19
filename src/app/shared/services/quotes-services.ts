import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from '../model/user/UserProfile.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../model/quotes/Quote.model';

@Injectable({
    providedIn: 'root',
})

export class QuotesService {

    private quotesURL : string =  '/api/user';

    constructor(private httpClient : HttpClient) {}
    
    getQuote(today: boolean) : Observable<Quote>{
        

        return this.httpClient
            .get<Quote>(this.quotesURL)
                .pipe(
                    // RxJS operator
                    map( response => Object.assign(new UserProfile(), response) )
                )
        
    }

}