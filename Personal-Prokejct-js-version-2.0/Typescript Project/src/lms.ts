import { Subject} from "./subject";



export class LMS {
    public lmsMap:Map<string, object> = new Map();

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

