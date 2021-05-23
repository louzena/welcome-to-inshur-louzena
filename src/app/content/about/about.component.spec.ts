import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

@Component({   
  template: '<app-about><span>testing content projection</span></app-about>'   
  })
export class ContentProjectionTesterComponent {   
}

describe('AboutComponent', () => {
   let component: AboutComponent;  
   let fixture: ComponentFixture<AboutComponent>;

   let ngContent : DebugElement;

   beforeEach(async () => {
     
     await TestBed.configureTestingModule({       
       declarations: [ AboutComponent, ContentProjectionTesterComponent ],    
       schemas: [NO_ERRORS_SCHEMA]
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
    let text = 'testing';
    let fixture: ComponentFixture<ContentProjectionTesterComponent> =
     TestBed.createComponent(ContentProjectionTesterComponent);
   
    let innerHtml = fixture.debugElement.query(By.css('span')).nativeElement.innerHTML;
    expect(innerHtml).toContain(text);
  });

  });


  
