import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { FeedComponent } from './components/feed/feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    PostsComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
