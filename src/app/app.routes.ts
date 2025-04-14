import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { PersonEditComponent } from './components/person-edit.component';

export const AppRoutes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit/:id', component: PersonEditComponent }
];
