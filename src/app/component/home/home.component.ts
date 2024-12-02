import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { StoreComponent } from '../store/store.component';
import { DtProduct } from '../../Data/ProductData';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,AboutUsComponent,StoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any;

  constructor(private router:Router){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products=DtProduct;
  }
}
