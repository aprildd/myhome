import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxTimelineModule } from 'ngx-timeline';

import { PublicModule } from './public/public.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DemosComponent } from './pages/demos/demos.component';

export function createTranslateHttpLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        BlogComponent,
        DemosComponent
    ],
    imports: [
        BrowserModule,
        PublicModule,
        HttpModule,
        NgxTimelineModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateHttpLoader),
                deps: [Http]
            }
        }),
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: 'demos',
                component: DemosComponent
            },
            {
            	path: 'about',
            	component: AboutComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
