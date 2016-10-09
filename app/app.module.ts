import { NgModule }      from "@angular/core"
import { FormsModule }   from "@angular/forms"
import { HttpModule }    from "@angular/http"
import { BrowserModule } from "@angular/platform-browser"

import { MenuComponent }     from "./menu/menu.component"
import { CardComponent }     from "./core/card/card.component"
import { MenuService }       from "./menu/menu.service"
import { routing }           from "./app-routing.module"
import { AppComponent }      from "./app.component"
import { PostsComponent }    from "./posts/posts.component"
import { PostService }       from "./posts/post.service"
import { MenuItemComponent } from "./menu/menu-item/menu-item.component"
import { PostEditComponent } from "./posts/post-edit/post-edit.component"
import { CKEditorModule }    from "./core/ckeditor/ckeditor.module";

@NgModule({
    imports     : [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CKEditorModule
    ],
    declarations: [
        AppComponent,
        CardComponent,
        MenuComponent,
        MenuItemComponent,
        PostsComponent,
        PostEditComponent
    ],
    providers: [
        MenuService,
        PostService
    ],
    exports     : [],
    bootstrap   : [
        AppComponent
    ]
})

export class AppModule
{
}