import { Component, OnInit } from "@angular/core"
import { Router }            from "@angular/router"

import { PostService }  from "./post.service"
import { PostItem }     from "./post.item"

@Component({
    selector   : 'eva-posts',
    templateUrl: 'app/posts/posts.component.html',
    styleUrls  : [
        'app/posts/posts.component.css'
    ]
})

export class PostsComponent implements OnInit
{
    /**
     *
     */
    public list: any = [];

    /**
     *
     * @param router
     * @param service
     */
    constructor(private router: Router, private service: PostService)
    {

    }

    ngOnInit(): void
    {
        let component = this;
        this.service.all().then(function (items)
        {
            for (var i = 0; i < items.length; i++) {
                component.list.push(new PostItem(items[i]));
            }
        });
    }

    /**
     *
     * @param post PostItem
     */
    edit(post: PostItem): void
    {
        let link = ['posts/', post.id];
        this.router.navigate(link);
    }
}