import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Quote } from '../model/quotes/Quote.model';

@Injectable({
    providedIn: 'root',
})

export class QuotesService {

    public static readonly RANDOM_FREQ : string = 'random';
    public static readonly TODAY_FREQ : string = 'today';

    private quoteFreq : string = QuotesService.TODAY_FREQ; // default
   

    constructor(private httpClient : HttpClient) {}

    /**
     * Gets an Inspirational quote based on the frequency param
     * @param quoteFrequency determines the frequency of quotes each time the service is called. 'Random' for
     * a new quote on each request. 'Today' for the quote of the day (refreshed at midnight server time). Optional
     * parameter. Default is 'today'
     * @returns Observable<Quote>
     */
    getQuote(quoteFrequency? : string) : Observable<Quote>{

        if (quoteFrequency) this.quoteFreq = quoteFrequency;
        var quotesURL : string =  `/api/quote/${this.quoteFreq}`;        

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
                    }),
                    catchError(this.errorHandler)
                   
                )
        
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "server error.");
    }
    
}