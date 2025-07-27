import { CartService } from './../../core/services/cart/cart.service';
import { FlowbiteService } from './../../core/services/flowbite/flowbite.service';
import { MealService, Sandwich } from './../../core/services/services/meal.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChickenComponent } from '../chicken/chicken.component';

import { DrinksComponent } from '../drinks/drinks.component';
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  private readonly cartService=inject(CartService);
  
responceData:any;
  sandwiches:Sandwich[]=[];
  addedProducts: any[] = [];
  constructor(private MealService: MealService) {}

  ngOnInit() {
    this.MealService.getMeals().subscribe(data => {
      this.sandwiches = data;
    });
  }


  // handleAddToCart() {
  //   this.cartService.addToCart().subscribe((res:any) => {
  //     this.responceData = res;
  //      this.addedProducts = res.products || [];
  //     console.log('✅ Added to Cart:', res);
  //   });
  // }

}
