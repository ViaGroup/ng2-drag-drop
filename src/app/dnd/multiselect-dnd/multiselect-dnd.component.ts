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
    templateUrl: './multiselect-dnd.component.scss',
    styleUrls: ['./multiselect-dnd.component.scss']
})
export class VDMultiselectDragComponent implements OnInit {

    @Input() inputTable: Item[] = <any>[
        { id: 12, label: 'Support' },
        { id: 15, label: 'Commercial' },
    ]

    @Input() outpuTable: Multitable[] = [
        {
            // items: [],
            name: '1'
        },
        {
            // items: [],
            name: '2'
        },
        {
            // items: [],
            name: '3'
        }
    ]


    onDrop(e) {

    }


    constructor() { }

    ngOnInit() { }
}