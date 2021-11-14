import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoSteps = [
    {"step": "1","process":"Line the basket of your coffee maker with a filter. Grind coffee beans to medium or medium-fine grind size. Bring filtered water to a boil, then let it sit for a minute."},
    {"step": "2","process":"Pour enough water into the filter to wet it completely, and let it drain into your cup or coffee pot. Discard the water."},
    {"step": "3","process":"Measure the ground coffee into the wet filter. Pour in enough water to wet the ground beans and drain into your cup or coffee pot, then pour in the rest of the water."},

  ]

  getTodo(){
    return this.todoSteps
  }
  constructor() { }
}
