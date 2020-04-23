import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'About', component: AboutComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'Product', component: ProductComponent},
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
