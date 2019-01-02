export class Task {
    public title: string;
    public desc: string;
    public catName: string;
    public dueDate: string;
    public taskId: string;
    public status: number;
    public statusDesc: string;
    constructor( title: string, desc: string, catName: string, dueDate: string, taskId: string, status: number, statusDesc: string){
        this.title = title;
        this.desc = desc;
        this.catName = catName;
        this.dueDate = dueDate;
        this.taskId = taskId;
        this.status = status;
        this.statusDesc = statusDesc;
    }
}