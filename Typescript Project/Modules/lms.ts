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

                //Instances of Subject class
const history1 = new Subject({
    title: 'History',
    lessons: 24,
    description: 'The only source of knowledge is experience'
  });

const math = new Subject({
    title: 'Math',
    lessons: 20,
  });

  const biology = new Subject({
    title: 'Bio',
    lessons: 50,
  });


const h_id = history1.subject_ID;
const m_id = math.subject_ID;
const b_id = biology.subject_ID;
console.log("History ID = ",h_id)
console.log("Math ID = ",m_id)
console.log("Biology ID = ",b_id)



interface LMSObj extends SubjectObject{
    id: string;
}

const obj: LMSObj = {
    id: "1",
    title: "Histrpy",
    lessons: 21
}

export class LMS {
    public lmsMap = new Map();

    public add(subject:Subject):string{
        this.lmsMap.set(subject.id,{id: subject.id,...subject})
        return subject.id;
    }
    remove(subject:Subject):void{
        this.lmsMap.delete(subject.id);
    }

    verify(subject:Subject):boolean{
        return this.lmsMap.has(subject.id);
    }

    readAll():object[]{
        return [...this.lmsMap.values()];
    }

}

  //Instances of LMS class
  const lms = new LMS();


lms.add(history1); 
lms.add(math);    
lms.add(biology);  //return True or False;,to  verify must be instance of Subject
const test = 1;
const h_ver = lms.verify(history1); //true
const m_ver  = lms.verify(math); //true
const b_ver  = lms.verify(biology); //true
console.log("History Verify = ",h_ver)
console.log("Math Verify = ",m_ver)
console.log("Biology Verify = ",b_ver)

//const t_ver = lms.verify(test);//Error  
//console.log(t_ver);           //////title?? realll  

      //Just remove subject from LMS
//return nothing   
//lms.remove(math); 

  //List all Data in LMS
const lmsList = lms.readAll();
console.log("LMS readALL = ",lmsList);
