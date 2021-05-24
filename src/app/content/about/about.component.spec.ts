import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';

// Angular Language Service bug - IDE compiler error for custom tag even with CUSTOM_ELEMENTS_SCHEMA
// Compiles and builds fine though - commenting out for now. Will file a bug report 

// @Component({   
//   template: '<app-about><span>testing content projection</span></app-about>'   
//   })
// export class ContentProjectionTesterComponent {   
// }

describe('AboutComponent', () => {
   let component: AboutComponent;  
   let fixture: ComponentFixture<AboutComponent>;

   let ngContent : DebugElement;

   beforeEach(async () => {
     
     await TestBed.configureTestingModule({          
      schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
      declarations: [AboutComponent],
      imports: [RouterTestingModule]
     })
     .compileComponents();     
   });

   beforeEach(() => {
     fixture = TestBed.createComponent(AboutComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();     
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   // See comment above - Angular Language service bug

  //  it('it should project the content', () => {    
  //   let text = 'testing';
  //   let fixture: ComponentFixture<ContentProjectionTesterComponent> =
  //    TestBed.createComponent(ContentProjectionTesterComponent);
   
  //   let innerHtml = fixture.debugElement.query(By.css('span')).nativeElement.innerHTML;
  //   expect(innerHtml).toContain(text);
  //   });

  });


  
