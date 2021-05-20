import { formatDate } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Quote } from 'src/app/shared/model/quotes/Quote.model';
import { QuotesService } from 'src/app/shared/services/quotes-services';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public static readonly RANDOM_FREQ : string = 'random';
  public static readonly TODAY_FREQ : string = 'today';

  @Input() inspoQuote : Quote = new Quote();
  @Input() quoteFreq: string = QuoteComponent.TODAY_FREQ;
  
  todayDateString : string = "";

  constructor(private quotesService: QuotesService) { 

    // this.todayDateString = formatDate(Date.now(),'MMMM dd, YYYY', 'en-US');
    // console.log(this.quoteFreq);

    // this.quotesService.getQuote(this.quoteFreq).subscribe(data => {
    //   //console.log(data);     
    //   this.inspoQuote = data;       
    // });
  }

  ngOnInit(): void {

    this.todayDateString = formatDate(Date.now(),'MMMM dd, YYYY', 'en-US');
    console.log(this.quoteFreq);

    this.quotesService.getQuote(this.quoteFreq).subscribe(data => {
      //console.log(data);     
      this.inspoQuote = data;       
    });



  }

}

