interface Group{
        id: string,
        room: number,
        pupils:object[]     
}

export class Groups{
    //: Map<string, object>
    private groupsMap = new Map();

    static counter = 0;

    add(room:number):string{
        const id = String(++Groups.counter);
        this.groupsMap.set(id,{
            id,
            room,
            pupils: []
        });
        return id;
    }

    addPupil(groupId:string,pupil:object):void{
        this.groupsMap.get(groupId).pupils.push(pupil);
    }

    removePupil(groupId:string,pupilId:string):void{
        if (!this.groupsMap.has(groupId)){
            throw new TypeError(`Group# ${groupId} doesn\'t exist`);
        }
        
        const group = this.groupsMap.get(groupId);
        if (group.pupils.findIndex((pupil: { id: string; }) => pupil.id === pupilId) < 0){
            throw new TypeError(`Pupil with id# ${pupilId} doesn\'t exist in group# ${group.id}`);
        }
        group.pupils = group.pupils.filter((pupil: { id: string; }) => pupil.id !== pupilId);
    }

    update(groupId:string,room:object):void{
        const group = this.groupsMap.get(groupId);
        if(!group){
            throw new TypeError(`Group# ${groupId} group doesn\'t exist`);
        }
        group.room = room;
    }

    read(groupId:string):object{
        if (!this.groupsMap.has(groupId)){
            throw new TypeError(`Group# ${groupId} group doesn\'t exist`);
        }
        return this.groupsMap.get(groupId);
    }

    readAll():object[]{
        return [...this.groupsMap.values()];
    }
}