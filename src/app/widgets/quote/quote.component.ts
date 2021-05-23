import { formatDate } from '@angular/common';
import { Component, Injectable, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Quote } from 'src/app/shared/model/quotes/Quote.model';
import { QuotesService } from 'src/app/shared/services/quotes-services';

/**
 * Quote Widget Component that displays styled inspirational quotes based on frequency.
 * Communicates with an external Quote Service API to deliver the inspirational 
 * quotes.
 * 
 * Displays a brand new quote on component render/initialisation (unless quoteFreq = today)
 * 
 * inspoQuote - The current inspirational quote that is displayed in the template.
 * @Input quoteFreq - The frequency of the quote. Set 'random' for a random quote or 'today' for
 * the quote of the day 
 * 
 */
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit { 

  inspoQuote : Quote = new Quote();
  @Input() quoteFreq: string = QuotesService.TODAY_FREQ;
  
  todayDateString : string = "";

  constructor(private quotesService: QuotesService) {  }

  ngOnInit(): void {

    this.todayDateString = formatDate(Date.now(),'MMMM dd, YYYY', 'en-US');    

    this.quotesService.getQuote(this.quoteFreq).subscribe(data => {       
      this.inspoQuote = data;       
    });

  }

  reloadQuote() { // TODO - reload new quote on demand

  }

}

