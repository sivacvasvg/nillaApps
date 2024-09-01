import { Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';

export const routes: Routes = [
    {path:'',redirectTo:'master',pathMatch:'full'},
    {path:'master',component:MasterComponent}
];
