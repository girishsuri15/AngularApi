import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoryfeedComponent } from './componentHelper/storyfeed/storyfeed.component';
import { StoryNextComponent } from './componentHelper/story-next/story-next.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleFullComponent } from './componentHelper/article-full/article-full.component';
import { MyArticleComponent } from './my-article/my-article.component';
import { TagComponent } from './componentHelper/tag/tag.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsernavComponent,
    HomeComponent,
    StoryfeedComponent,
    StoryNextComponent,
    AuthComponent,
    NewArticleComponent,
    ArticleEditorComponent,
    ArticleFullComponent,
    MyArticleComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
