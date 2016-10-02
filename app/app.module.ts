import { NgModule }      from "@angular/core"
import { FormsModule }   from "@angular/forms"
import { HttpModule }    from "@angular/http"
import { BrowserModule } from "@angular/platform-browser"

import { MenuComponent }     from "./menu/menu.component"
import { MenuService }       from "./menu/menu.service"
import { routing }           from "./app-routing.module"
import { AppComponent }      from "./app.component"
import { PostsComponent }    from "./posts/posts.component"
import { PostsService }      from "./posts/posts.service"
import { MenuItemComponent } from "./menu/menu-item/menu-item.component"

@NgModule({
    imports     : [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        MenuComponent,
        AppComponent,
        PostsComponent,
        MenuItemComponent
    ],
    providers: [
        MenuService,
        PostsService
    ],
    exports     : [],
    bootstrap   : [
        MenuComponent,
        AppComponent
    ]
})

export class AppModule
{
}