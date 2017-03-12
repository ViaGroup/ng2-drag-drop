import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Draggable } from "./directives/draggable";
import { Droppable } from "./directives/droppable";
import { Ng2DragDropService } from "./services/ng2-drag-drop.service";
import { VDMultiselectDragComponent } from './multiselect-dnd';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Draggable,
    Droppable,
    VDMultiselectDragComponent
  ],
  exports: [
    Draggable,
    Droppable,
    VDMultiselectDragComponent
  ],
  providers: [
    Ng2DragDropService
  ],
})
export class Ng2DragDropModule {
}
