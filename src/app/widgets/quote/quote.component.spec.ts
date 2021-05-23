import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteComponent } from './quote.component';
import { MockQuoteService } from '../../../testing/shared/services/MockQuoteService';
import { QuotesService } from 'src/app/shared/services/quotes-services';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;  

  let dateParaElement : DebugElement;
  let quoteParagraphEl : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ QuoteComponent ],
      providers: [   // Mock Service injection    
        { provide: QuotesService, useClass: MockQuoteService }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should retrieve a quote from the service', () => {    
    expect(component.inspoQuote).toBeDefined();
    expect(component.inspoQuote.author).toEqual('Albert Einstein');
  });

  it('should have a default quote frequency', () => {
    expect(component.quoteFreq).not.toBeUndefined();
    expect(component.quoteFreq).not.toEqual('');   
  });

  it('should have a default quote frequency of TODAY ' , () => {
    expect(component.quoteFreq).toEqual(QuotesService.TODAY_FREQ);    
  });

  it('should have a date string', () => {
    expect(component.todayDateString).not.toBeUndefined();
    expect(component.todayDateString).not.toEqual('');   
  });

  it('should display the date paragraph if the frequency is today', () => {
   
    dateParaElement = fixture.debugElement.query(By.css('#dateParagraph'));  
    expect(dateParaElement).not.toBeNull();

  });

  it('should display the date text if the frequency is today', () => {
   
    dateParaElement = fixture.debugElement.query(By.css('#dateParagraph'));  
    expect(dateParaElement.nativeElement.textContent).toContain(component.todayDateString);

  });

  it('should display the Inspirational Quote HTML', () => {
   
    quoteParagraphEl = fixture.debugElement.query(By.css('#quoteParagraph'));  
    expect(quoteParagraphEl.nativeElement.innerHTML).toContain(component.inspoQuote.quoteHtml);
  });

});
