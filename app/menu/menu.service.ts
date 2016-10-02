import { Injectable } from "@angular/core"
import { Http }       from "@angular/http"

import { MenuItem }   from "./menu.item"
import "rxjs/add/operator/toPromise"

@Injectable()
export class MenuService
{
    /**
     * Api uri
     * @type {string}
     */
    private url: string = 'https://api.tapakan.name/ru/api/menu';

    /**
     * Service constructor
     * @param http
     */
    constructor(private http: Http)
    {

    }

    /**
     *
     * @returns {Promise<MenuItem[]>}
     */
    all(): Promise<MenuItem[]>
    {
        return this.http.get(this.url)
                   .toPromise()
                   .then(response => response.json().data);
    }
}