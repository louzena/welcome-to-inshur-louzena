import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';

// Angular Language Service compiler error on below @Component template metadata
// Error for custom <app-about> tag even with CUSTOM_ELEMENTS_SCHEMA added to testing module . Compiles and builds fine though 
// Bug report here https://github.com/angular/angular/issues/42356 

@Component({   
  template: '<app-about><span>testing content projection</span></app-about>' ,
  jit: true  // Tells AOT compiler to ignore this class (see bug report above)
  })
export class ContentProjectionTesterComponent {   
}

describe('AboutComponent', () => {
   let component: AboutComponent;  
   let fixture: ComponentFixture<AboutComponent>;

   let ngContent : DebugElement;

   beforeEach(async () => {
     
     await TestBed.configureTestingModule({      
      declarations: [AboutComponent]
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

   it('it should project the content', () => {    
    let text = 'testing content projection';
    let fixture: ComponentFixture<ContentProjectionTesterComponent> =
     TestBed.createComponent(ContentProjectionTesterComponent);
   
    let innerHtml = fixture.debugElement.query(By.css('span')).nativeElement.innerHTML;
    expect(innerHtml).toContain(text);
    });

  });


  
