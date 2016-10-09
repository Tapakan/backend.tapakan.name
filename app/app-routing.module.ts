import { ModuleWithProviders }  from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { PostsComponent }    from "./posts/posts.component"
import { PostEditComponent } from "./posts/post-edit/post-edit.component"

const AppRoutes: Routes = [
    {
        path      : '',
        redirectTo: 'posts',
        pathMatch : 'full'
    },
    {
        path     : 'posts',
        component: PostsComponent,
        pathMatch: 'full'
    },
    {
        path     : 'posts/:id',
        component: PostEditComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);