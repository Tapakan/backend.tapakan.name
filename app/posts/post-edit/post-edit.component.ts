import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params }   from "@angular/router";

import { PostService }  from "../post.service";
import { PostItem }     from "../post.item";

@Component({
    selector   : 'post-edit',
    templateUrl: 'app/posts/post-edit/post-edit.component.html'
})

export class PostEditComponent implements OnInit
{
    @Input() post: PostItem;

    /**
     *
     * @param route
     * @param service
     */
    constructor(private route: ActivatedRoute, private service: PostService)
    {
    }

    ngOnInit(): void
    {
        this.route.params.forEach((params: Params) =>
        {
            let id = +params['id'];
            this.service.get(id).then(post => this.post = post);
        });
    }

    /**
     *
     * @param content
     */
    onNotify(content): void
    {
        this.post.content = content;
    }

    save(): void
    {
        console.log(this.post);
    }

    close(): void
    {
        window.history.back();
    }
}