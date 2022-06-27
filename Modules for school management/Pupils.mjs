import { validatePupils } from "../Validation/PupilsVal.mjs";
export class Pupils{
    #counter = 1;
    #pupils = new Map();
    #pupilID = 0;
    
    add(pupil){
            validatePupils(pupil);
            this.#pupilID= String(this.#counter++);
            const id = this.#pupilID;
            let addPupil = {id,...pupil};
            this.#pupils.set(id,pupil);
            return  addPupil;
            
        }

        get id(){
            return this.addPupil.id
        }

        read(id){
            if (typeof id !== 'string'){
                throw new TypeError("Pupils_ID must be string type AND is required parametr");
            }
            if (id.length === 0){
                throw new TypeError("Pupils_ID must not be EMPTY string");
            }
            return this.#pupils.has(id)? {id,...this.#pupils.get(id)} : null;
        }

        update(id, updatedPupil){
            if (typeof id !== 'string'){
                throw new TypeError("Pupil_ID must be string type AND is required parametr");
            }
            if (id.length === 0){
                throw new TypeError("Pupil_ID must not be EMPTY string ");
            }
            validatePupils(updatedPupil);
            const foundPupil = this.read(id);
            if (foundPupil === null){throw  new Error("Id dont match with Pupils Data Base")}
            delete foundPupil.id;
            this.#pupils.set(id, {
                ...foundPupil,
                ...updatedPupil
            });
        }


        remove(id){
            if (typeof id !== 'string'){
                throw new TypeError("Teachers_ID must be string type AND is required parametr");
            }
            if (id.length === 0){
                throw new TypeError("Teachers_ID must not be EMPTY string ");
            }

            if(!this.#pupils.has(id)){
                throw new Error(`Doesn\'t exist this Teacher on ${id}`)
            }
            this.#pupils.delete(id);
        }




}