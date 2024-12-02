import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StoreComponent } from '../store/store.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink,HomeComponent,StoreComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
