import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title
  ) {}


  vegetables = [
        { name: "Carrot", type: "vegetable" },
        { name: "Onion", type: "vegetable" },
        { name: "Potato", type: "vegetable" },
        { name: "Capsicum", type: "vegetable" }];

    fruits = [
        { name: "Apple", type: "fruit" },
        { name: "Orange", type: "fruit" },
        { name: "Mango", type: "fruit" },
        { name: "Banana", type: "fruit" },
        { name: "Pear", type: "fruit" }];

    list1 = [
        { name: 'Toyota' },
        { name: 'Bugati' },
        { name: 'Suzuki' },
        { name: 'Honda' },
        { name: 'BMW' }
    ];

    list2 = [
        { name: 'Mercedes' },
    ];

    droppedFruits = [];
    droppedVegetables = [];
    droppedItems = [];

    onFruitDrop(e: any) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    }

    onVegetableDrop(e: any) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    }

    onAnyDrop(e: any) {
        this.droppedItems.push(e.dragData);

        if (e.dragData.type === 'vegetable')
            this.removeItem(e.dragData, this.vegetables);
        else
            this.removeItem(e.dragData, this.fruits);
    }

    onList1Drop(e: any) {
        this.list1.push(e.dragData);
        this.removeItem(e.dragData, this.list2)
    }

    onList2Drop(e: any) {
        this.list2.push(e.dragData);
        this.removeItem(e.dragData, this.list1)
    }

    removeItem(item: any, list: Array<any>) {
        let index = list.map((e) => {
            return e.name
        }).indexOf(item.name);
        list.splice(index, 1);
    }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
