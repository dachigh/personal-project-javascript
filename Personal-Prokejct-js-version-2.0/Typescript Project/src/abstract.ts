type MyRegexDate = RegExp;

export interface Pupil{
    name: {
        first: string,
        last: string
    },
    dateOfBirth: string,
    phones:{phone: string,primary: boolean}[],
    sex: string,
    description?: string

}

//let range = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;

export abstract class Community{

    public add(data:Pupil):string|object{
    return {}
    }

    public read(id:string):object{
        return {}
    };

    public update(id:string,updatedProfile:object):void{
    }
    
    public remove(id:string):boolean{
        return true;
    }

}


