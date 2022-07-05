import {Community,Pupil} from './abstract'

export class Pupils extends Community{
    public pupilsMap: Map<string, object> = new Map();

    private static counter:number = 0;
    
    
    
    private pupilID: string = '0'; 

    public add(pupil: Pupil){
        this.pupilID = String(++Pupils.counter);
        this.pupilsMap.set(this.pupilID,pupil);
        return {id: this.pupilID,...this.pupilsMap.get(this.pupilID)};
    }

    get id():string{
        return this.pupilID;
    
    }
    
    public read(id: string): object {
        if(!this.pupilsMap.has(id)){
            throw new Error(`Pupil on id ${id} doesn't exist`);
        }else{
            return {id,...this.pupilsMap.get(id)};
        }
    }


    public update(id: string, updatedProfile: Pupil): void {
        if (!this.pupilsMap.has(id)){
            throw new Error(`Pupil on id ${id} doesn't exist`);
        }
        this.pupilsMap.set(id,updatedProfile);
    }
    
    public remove(id: string): boolean {
        if (!this.pupilsMap.has(id)){
            throw new Error(`Pupil on id ${id} doesn't exist`);
        }else{
            return this.pupilsMap.delete(id);
        }
    }

}








































