import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { ProductsComponent } from './department-detail/products/products.component';
import { ServicesComponent } from './department-detail/services/services.component';
import { HttpContactsComponent } from './http-contacts/http-contacts.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'services', component: ServicesComponent}
    ]
  },
  {path: 'httpContacts', component: HttpContactsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
