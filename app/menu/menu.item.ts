export class MenuItem
{
    public title;

    public link;

    public icon;

    public children;

    constructor(data: any)
    {
        this.title    = data.title;
        this.link     = data.link;
        this.children = data.children;
        this.icon     = data.icon;
    }
}