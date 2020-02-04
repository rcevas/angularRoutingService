import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { ProductsComponent } from './department-detail/products/products.component';
import { ServicesComponent } from './department-detail/services/services.component';
import { ContactService } from './contact.service';
import { HttpContactsComponent } from './http-contacts/http-contacts.component';
import { AppInterceptorService } from './app-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    ProductsComponent,
    ServicesComponent,
    HttpContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
