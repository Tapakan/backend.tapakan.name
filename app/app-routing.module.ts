import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./posts/posts.component"
import { AppComponent }   from "./app.component"

const AppRoutes: Routes = [
    {
        path     : '',
        component: AppComponent
    },
    {
        path     : 'posts',
        component: PostsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);