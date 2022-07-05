interface SubjectObject {
    title: string,
    lessons: number, 
    description?: string 
}



export class Subject{
    static counter:number = 0;
    
    public id: string;
    public title: string;
    public lessons: number;
    public description?: string | undefined;
    

    constructor(subj:SubjectObject){
        this.title = subj.title;
        this.lessons = subj.lessons;
        if (subj.description !== undefined){
            this.description = subj.description;
        }
        this.id = String(++Subject.counter);
   }

   get subject_ID():string{
    return this.id;
    } 
}