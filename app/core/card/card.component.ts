import {Component, Input} from "@angular/core";

@Component({
    selector   : "eva-card",
    templateUrl: "app/core/card/card.component.html",
    styleUrls  : [
        "app/core/card/card.component.css"
    ]
})

export class CardComponent
{
    @Input() title: string;
    @Input() content: string;
}