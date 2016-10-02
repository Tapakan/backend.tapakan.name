import { Component, Input } from "@angular/core"

@Component({
    selector   : 'eva-menu-item',
    templateUrl: 'app/menu/menu-item/menu-item.component.html',
    styleUrls  : [
        'app/menu/menu-item/menu-item.component.css'
    ]
})

export class MenuItemComponent
{
    @Input() item: any;
}