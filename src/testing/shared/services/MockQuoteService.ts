import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from 'src/app/shared/model/quotes/Quote.model';
import { QuotesService } from 'src/app/shared/services/quotes-services';

@Injectable()
export class MockQuoteService  {

    public getQuote(quoteFrequency? : string) : Observable<Quote> {

        let quote : Quote = new Quote();
        quote.author = 'Albert Einstein';
        quote.quoteText = 'Creativity is intelligence having fun';
        quote.quoteHtml = '<blockquote> Creativity is intelligence having fun </blockquote>';
        return of(quote);
    }


}