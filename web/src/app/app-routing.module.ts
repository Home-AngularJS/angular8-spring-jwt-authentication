import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddUserComponent } from "./user/add-user/add-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalGroupsComponent } from './terminal-groups/terminal-groups.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path : '', component : HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'terminal-groups', component: TerminalGroupsComponent} ,
  { path: 'terminal', component: TerminalComponent },
  { path: 'transaction', component: TransactionComponent }
];

// export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
