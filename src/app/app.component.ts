import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { BeefComponent } from './pages/beef/beef.component';
import { DrinksComponent } from './pages/drinks/drinks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mac';
 
  // constructor(private FlowbiteService: FlowbiteService) {}

  // ngOnInit(): void {
  //   this.FlowbiteService.loadFlowbite((flowbite) => {
   
  //   });
  
  // }
}
