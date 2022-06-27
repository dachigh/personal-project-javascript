import {validateTeachers} from "../Validation/TeachersVal.mjs"


export class Teachers{
    #counter = 1;
    #teachers = new Map();
    
    add(teacher){
            validateTeachers(teacher);
            const id = String(this.#counter++);
            this.#teachers.set(id, teacher);
            return id;
        }


}

