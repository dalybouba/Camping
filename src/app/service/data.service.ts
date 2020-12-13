import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let theme = [
      { id: 1, themeName: "Desert", discription: "Was brean shed moveth day yielding tree yielding day were female and", image: 'assets/img/food_item/food_item_1.png' },
      { id: 2, themeName: "Forest", discription: "Was brean shed moveth day yielding tree yielding day were female and", image: 'assets/img/food_item/food_item_1.png' },
      { id: 3, themeName: "Beach", discription: "Was brean shed moveth day yielding tree yielding day were female and", image: 'assets/img/food_item/food_item_1.png' }

    ];
    let option = [
      { id: 1, optionName: "Maison D'hote", discription: "Was brean shed moveth day yielding tree yielding day were female and", image: "assets/img/food_item/food_item_2.png" },
      { id: 2, optionName: "Camping", discription: "Was brean shed moveth day yielding tree yielding day were female and", image: "assets/img/food_item/food_item_2.png" },
      { id: 3, optionName: "Hiking", discription: "Was brean shed moveth day yielding tree yielding day were female and", image: "assets/img/food_item/food_item_2.png" }

    ];
    let place = [
      { id: 1, Name: "Maison D'hote", titre: "Was brean shed moveth day yielding tree yielding day were female and", image: "assets/img/food_item/food_item_2.png" },
      { id: 2, Name: "Camping", titre: "Was brean shed moveth day yielding tree yielding day were female and", image: "assets/img/food_item/food_item_2.png" },
      { id: 3, Name: "Hiking", titre: "Was brean shed moveth day yielding tree yielding day were female and", image: "assets/img/food_item/food_item_2.png" }

    ];

    return { theme, option, place };

  }
}
