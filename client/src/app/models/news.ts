
export class News {

    // Insert here your custom attributes and function

    // Functions for User

    public _id?: string;
    public title?: string;
    public author?: string;
    public story_url?: string;
    public created_at?: string;

    constructor(
        _id?: string,
        title?: string,
        author?: string,
        story_url?: string,
        created_at?: string
    ) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.story_url = story_url;
        this.created_at = created_at;
    }

}