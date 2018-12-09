export class Category {
    public title: string;
    public desc: string;
    public catID: string;
    constructor( title: string, desc: string, catID: string){
        this.title = title;
        this.desc = desc;
        this.catID = catID;
    }
}