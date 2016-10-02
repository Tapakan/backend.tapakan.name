import { Component, OnInit } from "@angular/core"
import { PostsService }      from "./posts.service"
import { PostItem }          from "./post.item"

@Component({
    selector   : 'eva-posts',
    templateUrl: 'app/posts/posts.template.html',
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
     * @param service
     */
    constructor(private service: PostsService)
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
}