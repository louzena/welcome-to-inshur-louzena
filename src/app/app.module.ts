import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './content/about/about.component';
import { CommentsComponent } from './content/comments/comments.component';
import { LeftSidebarComponent } from './sidebar/left-sidebar/left-sidebar.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { QuoteComponent } from './widgets/quote/quote.component';
import { RightSidebarComponent } from './sidebar/right-sidebar/right-sidebar.component';
@NgModule({
  declarations: [
    AppComponent,    
    WidgetsComponent,
    HeaderComponent,
    ContentComponent,
    AboutComponent,
    CommentsComponent,
    LeftSidebarComponent,
    SocialMediaComponent,
    UserInfoComponent,
    QuoteComponent,
    RightSidebarComponent
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
