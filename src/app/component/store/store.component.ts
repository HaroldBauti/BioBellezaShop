import { Component,Output,EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Route, Router, RouterLink } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DtProduct } from '../../Data/ProductData';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,RouterLink,HomeComponent,AboutUsComponent,StoreComponent,CartComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  products:any;
  @Output() productAdded = new EventEmitter<Product>();

  constructor(private router:Router,private cartService:CartService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products=DtProduct;
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product); // Emitir el evento para agregar al carrito
  }
}
