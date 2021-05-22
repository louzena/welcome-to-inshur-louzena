import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit { 

  @ContentChild('contentParagraph', {static: true}) paragraph : ElementRef;

  ngOnInit(): void {
  }

}
