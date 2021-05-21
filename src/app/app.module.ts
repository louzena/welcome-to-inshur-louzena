import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './content/about/about.component';
import { LeftSidebarComponent } from './sidebar/left-sidebar/left-sidebar.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { QuoteComponent } from './widgets/quote/quote.component';
import { RightSidebarComponent } from './sidebar/right-sidebar/right-sidebar.component';
import { ContactFormComponent } from './content/contact-form/contact-form.component';
import { SkillsInfoComponent } from './content/skills-info/skills-info.component';
@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    AboutComponent,
    LeftSidebarComponent,
    SocialMediaComponent,
    UserInfoComponent,
    QuoteComponent,
    RightSidebarComponent,
    ContactFormComponent,
    SkillsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
