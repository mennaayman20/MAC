import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { BeefComponent } from './pages/beef/beef.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent },
    {path:"menu",component:MenuComponent ,
        children:[
        {path:'chicken',component:ChickenComponent},
        {path:'beef',component:BeefComponent},
        {path:'drinks',component:DrinksComponent},
    ]
    },
    {path:"order",component:OrdersComponent},
    {path:"contact",component:ContactComponent},
{path:'**',component:NotfoundComponent}


];
