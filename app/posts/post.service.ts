import {Injectable} from "@angular/core";
import {Http}       from "@angular/http";

import {PostItem} from "./post.item";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PostService
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

    /**
     * Return hero by id
     * @param {number} id Post id
     * @returns {PromiseLike<PostItem>}
     */
    get(id): PostItem
    {
        return this.http.get(this.url + '/' + id)
                   .toPromise()
                   .then(response => new PostItem(response.json().data));
    }
}