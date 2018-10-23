import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NewArticleComponent } from './new-article/new-article.component'
import { ArticleFullComponent } from './componentHelper/article-full/article-full.component'
import { MyArticleComponent } from './my-article/my-article.component'

export const  appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path:'signUp', component:AuthComponent},
{path:'login',component:AuthComponent},
{path:'newarticle',component:NewArticleComponent},
{path:'myarticle',component:MyArticleComponent},
{path:'article/:slug',component:ArticleFullComponent}
];
