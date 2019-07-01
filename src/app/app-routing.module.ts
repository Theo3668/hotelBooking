import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path: '', component:MenuComponent, children:[{path:'',component:RoomsComponent},{path:'rooms',redirectTo:''},
                                                                      {path: 'form',component:FormComponent}, 
                                                                      {path: 'contact',component:ContactComponent}]
                        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
