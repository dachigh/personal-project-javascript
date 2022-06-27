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
                throw new TypeError("Teachers_ID must be string type AND is required parametr");
            }
            if (id.length === 0){
                throw new TypeError("Teachers_ID must not be EMPTY string");
            }
            return this.#teachers.has(id)? {id,...this.#teachers.get(id)} : null;
        }


        update(id, updatedTeacher){
            if (typeof id !== 'string'){
                throw new TypeError("Teachers_ID must be string type AND is required parametr");
            }
            if (id.length === 0){
                throw new TypeError("Teachers_ID must not be EMPTY string ");
            }
            validateTeachers(updatedTeacher);
            const foundTeacher = this.read(id);
            if (foundTeacher === null){throw  new Error("Id dont match with Teachers Data Base")}
            delete foundTeacher.id;
            this.#teachers.set(id, {
                ...foundTeacher,
                ...updatedTeacher
            });
        }

        remove(id){
            if (typeof id !== 'string'){
                throw new TypeError("Teachers_ID must be string type AND is required parametr");
            }
            if (id.length === 0){
                throw new TypeError("Teachers_ID must not be EMPTY string ");
            }

            if(!this.#teachers.has(id)){
                throw new Error(`Doesn\'t exist this Teacher on ${id}`)
            }
            this.#teachers.delete(id);
        }

}

