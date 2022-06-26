import { Subject } from "../Modules for school management/LMS.mjs"; 

export function checkInstanceOfSubject(subjectClass)
{
    if (subjectClass instanceof Subject) {return true;}
    else {throw new Error("Parametr of method must be instance of Subject class");}
}