import {validateSubject} from "../Validation/SubjectVal.mjs";

import {checkInstanceOfSubject} from "../Validation/LMSval.mjs";

let counter = 0;
export class Subject{
    #subjectid = 0;
    constructor(subject){
    validateSubject(subject);
    this.#subjectid = String(counter++);
    this.title = subject.title;
    this.lessons = subject.lessons;
    if (subject.description) 
    {
        this.description = subject.description;
    }
    else
    {
        this.description = null;
    }
};

     get id() {  
         return this.#subjectid
     }
}

export class LMS{
    #counter = 0;
    #LMSid = 0;
    #lms = new Map();

    add(subjectClass){
        checkInstanceOfSubject(subjectClass);
        let { ...tempObj } = subjectClass;
        let objID = { id: subjectClass.id };
        
        let subjectObj = { ...objID,...tempObj};

        this.#LMSid = String(this.#counter++);
        this.#lms.set(this.#LMSid, subjectObj);
    }
   
    verify(subjectClass){
        checkInstanceOfSubject(subjectClass);

            if (this.#lms.has(subjectClass.id))
            {
                return true;
            }else{
                return false;
            }
    }

    remove(subjectClass){
        checkInstanceOfSubject(subjectClass);
        const bool = this.verify(subjectClass);
        if (bool){
            this.#lms.delete(subjectClass.id);
        }
        else{
            throw new Error('Doesn\'t exist in LMS')
        }
    }

    readAll(){
        if(arguments.length) throw new Error('argument was passed')
        const arr = [...this.#lms.values()]; 
        if (arr.length === 0){
            throw new Error('Array of registered subjects is empty');
        }
        else{
            return [...this.#lms.values()];
        }
    }

}





