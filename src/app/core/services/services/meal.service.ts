import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Sandwich {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating:number;
}

@Injectable({
  providedIn: 'root'
})
export class MealService {
 private apiUrl = 'http://127.0.0.1:3000/meals'
  constructor(private http:HttpClient) { }
getMeals(): Observable<Sandwich[]> {
  return this.http.get<Sandwich[]>(this.apiUrl);
}
}
