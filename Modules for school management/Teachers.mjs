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

        read(id){
            if (typeof id !== 'string'){
                throw new TypeError("Teachers_ID must be string type AND is required");
            }
            if (id.length === 0){
                throw new TypeError("Teachers_ID must not be EMPTY string");
            }
            return this.#teachers.has(id)? {id,...this.#teachers.get(id)} : null;
        }


        update(id, updatedTeacher){
            validateTeachers(updatedTeacher);
            const foundTeacher = this.read(id);
            delete foundTeacher.id;
            this.#teachers.set(id, {
                ...foundTeacher,
                ...updatedTeacher
            });
        }

        remove(id){
            if(!this.#teachers.has(id)){
                throw new Error('Doesn\'t exist this Teacher')
            }
            this.#teachers.delete(id);
        }



}

