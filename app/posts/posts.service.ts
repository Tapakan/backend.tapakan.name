import { Injectable } from "@angular/core"
import { Http }       from "@angular/http"

import { PostItem }   from "./post.item"
import "rxjs/add/operator/toPromise"

@Injectable()
export class PostsService
{
    /**
     * Api uri
     * @type {string}
     */
    private url: string = 'https://api.tapakan.name/ru/api/posts';

    /**
     * Service constructor
     * @param http
     */
    constructor(private http: Http)
    {

    }

    /**
     *
     * @returns {Promise<PostItem[]>}
     */
    all(): Promise<PostItem[]>
    {
        return this.http.get(this.url)
                   .toPromise()
                   .then(response => response.json().data);
    }
}