import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from '../model/user/UserProfile.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../model/quotes/Quote.model';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root',
})

export class QuotesService {

    public static readonly RANDOM_FREQ : string = 'random';
    public static readonly TODAY_FREQ : string = 'today';

    private quoteFreq : string = QuotesService.TODAY_FREQ; // default
    //private quotesURL : string =  `/api/quote/${this.quoteFreq}`;
    

    constructor(private httpClient : HttpClient) {}

    
    getQuote(quoteFrequency? : string) : Observable<Quote>{

        if (quoteFrequency) this.quoteFreq = quoteFrequency;
        var quotesURL : string =  `/api/quote/${this.quoteFreq}`;

        console.log(quoteFrequency);
        console.log(quotesURL);

        return this.httpClient
            .get(quotesURL)
                .pipe(
                    // RxJS operator
                    map(quotes => quotes[0]), // returns a {0|1} element array
                    map(response => {
                        const quote = new Quote();
                        quote.author = response.a;
                        quote.quoteHtml = response.h;
                        quote.quoteText = response.q;  
                        return quote;
                    })
                   
                )
        
    }

}