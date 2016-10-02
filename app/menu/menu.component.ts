import { Component, OnInit } from "@angular/core"
import { MenuService }       from "./menu.service"
import { MenuItem }          from "./menu.item"

@Component({
    selector   : 'eva-menu',
    templateUrl: 'app/menu/menu.component.html',
    styleUrls  : [
        'app/menu/menu.component.css'
    ]
})

export class MenuComponent implements OnInit
{
    classes: Array<boolean> = [];

    /**
     *
     */
    public list: Array = [];

    /**
     *
     * @param service
     */
    constructor(private service: MenuService)
    {

    }

    ngOnInit(): void
    {
        let component = this;
        this.service.all().then(function (items)
        {
            for (var i = 0; i < items.length; i++) {
                component.list.push(new MenuItem(items[i]));
            }
        });
    }
}