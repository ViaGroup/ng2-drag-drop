import { NgModule } from '@angular/core';
import { Draggable } from "./directives/draggable";
import { Droppable } from "./directives/droppable";
import { Ng2DragDropService } from "./services/ng2-drag-drop.service";
import { MVDMultiselectDragComponent } from './multiselect-dnd';

@NgModule({
  imports: [],
  declarations: [
    Draggable,
    Droppable,
    MVDMultiselectDragComponent
  ],
  exports: [
    Draggable,
    Droppable,
    MVDMultiselectDragComponent
  ],
  providers: [
    Ng2DragDropService
  ],
})
export class Ng2DragDropModule {
}
