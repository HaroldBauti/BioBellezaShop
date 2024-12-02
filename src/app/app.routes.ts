import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { StoreComponent } from './component/store/store.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [{path:'',component:HomeComponent},
{path:'Nosotros',component:AboutUsComponent},
{path:'Tienda',component:StoreComponent},
{path:'Carrito',component:CartComponent}
];
