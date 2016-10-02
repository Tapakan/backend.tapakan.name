export class PostItem
{
    id: number;
    name: string;
    alias: string;
    content: string;
    author: string;
    publishDate: string;
    modifyDate: string;

    constructor(data: any)
    {
        this.id          = data.id;
        this.name        = data.name;
        this.alias       = data.alias;
        this.content     = data.content;
        this.author      = data.author;
        this.publishDate = data.publishDate;
        this.modifyDate  = data.modifyDate;
    }
}