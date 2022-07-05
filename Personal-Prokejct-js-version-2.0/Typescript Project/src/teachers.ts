import {Pupil,Community} from "./abstract";

interface Teacher extends Pupil{
    emails: 
        {
          email: string,
          primary: boolean
        }[],
        subjects:{subject: string}[]
}


export class Teachers extends Community{
    public teachersMap: Map<string, object> = new Map();
    static counter = 0;

        public add(teacher: Teacher): string{
            const id = String(++Teachers.counter);
            this.teachersMap.set(id,teacher);
            return id;
        }


        public read(id: string): object {
            if (!this.teachersMap.has(id)){
                throw new Error(`Teacher on id ${id} doesn't exist`);
            }else{
                return {'id': id,...this.teachersMap.get(id)};
            }
        }

        public update(id: string, updatedProfile: object): void {
            if (!this.teachersMap.has(id)){
                throw new Error(`Teacher on id ${id} doesn't exist`);
            }
            this.teachersMap.set(id,updatedProfile);
        }

        public remove(id: string): boolean {
            if (!this.teachersMap.has(id)){
                throw new Error(`Teacher on id ${id} doesn't exist`);
            }else{
                return this.teachersMap.delete(id);
            }
        }
        


}