import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { AppRoutingModule } from './app.route';
// const appRoutes: Routes = [
//   {
//     path: '',
//     component: PostComponent,
//     data: { title: 'Post List' },
//     pathMatch: 'full'
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(A),
    HttpClientModule,
    MatCardModule,
    NgbModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
