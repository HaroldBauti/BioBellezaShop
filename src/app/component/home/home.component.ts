import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { StoreComponent } from '../store/store.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,AboutUsComponent,StoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
