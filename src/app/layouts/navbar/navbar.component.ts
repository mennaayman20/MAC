import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from './../../core/services/flowbite/flowbite.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
   
    });
  
  }
}
