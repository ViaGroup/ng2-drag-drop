import { Component, OnInit, Input } from '@angular/core';

export interface Item {
    selected?: boolean;
}

export interface Multitable {
    name: string;
    items?: Item;
}


@Component({
    selector: 'vd-multiselect-drag',
    templateUrl: './multiselect-dnd.component.html',
    styleUrls: ['./multiselect-dnd.component.scss']
})
export class VDMultiselectDragComponent implements OnInit {

    @Input() inputTable: Item[] = <any>[
        { name: "Carrot", type: "vegetable" },
        { name: "Onion", type: "vegetable" },
        { name: "Potato", type: "vegetable" },
        { name: "Capsicum", type: "vegetable" };
    ]

    @Input() outpuTable: Multitable[] = [
        // {
        //     // items: [],
        //     name: '1'
        // },
        // {
        //     // items: [],
        //     name: '2'
        // },
        // {
        //     // items: [],
        //     name: '3'
        // }
    ]



    onDrop(e) {
        console.log('e', e)
        // if(e.dragData.items = undefined) e.dragData.items = [];
        this.outpuTable.push(e.dragData);
    }


    constructor() { }

    ngOnInit() { }
}