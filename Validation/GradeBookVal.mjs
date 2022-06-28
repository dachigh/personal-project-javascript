import { Groups } from "../Modules for school management/Groups.mjs";
import { LMS } from "../Modules for school management/LMS.mjs";
import { Teachers } from "../Modules for school management/Teachers.mjs";



export function ValidateGradebooksinstance (groups,teacher,lms){
    if (!(groups instanceof Groups))
    {throw new Error("Parametr of constructor must be instance of Groups class");}


    if (!(teacher instanceof Teachers))
    {throw new Error("Parametr of constructor must be instance of Teachers class");}

    if (!(lms instanceof LMS))
    {throw new Error("Parametr of constructor must be instance of LMS class");}

}


export function ValidateRecord(record){
    if (typeof record !== 'object' || (Array.isArray(record)))
        {
            throw new Error('Parametr must be Object');
        }

        const sizeObj = Object.getOwnPropertyNames(record).length; 
        if (sizeObj !== 5){
            throw new Error('Object must have only 5 properties');
        };


        if (sizeObj === 5){
            const arrMustProperties = new Array('pupilId', 'teacherId', 'subjectId', 'lesson', 'mark');
            const arrCheckProperties = new Array();
            for (let i = 0; i < sizeObj; i++)
            {
                arrCheckProperties.push(Object.getOwnPropertyNames(record)[i]);
            }
            
            if(JSON.stringify(arrMustProperties) !== JSON.stringify(arrCheckProperties))
            {
                throw new Error("Object Properties are not same as needed. Example of Required Properties: 'pupilId', 'teacherId', 'subjectId', 'lesson', 'mark'");
            };
        }

        if (typeof record.pupilId !== 'string')
        {
            throw new TypeError("Record:{pupilId} property should be string type")
        }
        if (record.pupilId === '')
        {
            throw new TypeError("Record:{pupilId} property should not be EMPTY string type")
        }


        if (typeof record.teacherId !== 'string')
        {
            throw new TypeError("Record:{teacherId} property should be string type")
        }
        if (record.teacherId === '')
        {
            throw new TypeError("Record:{teacherId} property should not be EMPTY string type")
        }

        if (typeof record.subjectId !== 'string')
        {
            throw new TypeError("Record:{subjectId} property should be string type")
        }
        if (record.subjectId === '')
        {
            throw new TypeError("Record:{subjectId} property should not be EMPTY string type")
        }

        if (typeof record.lesson !== 'number' || !(Number.isInteger(record.lesson)) || (record.lesson <= 0)){
            throw new TypeError("Record:{lesson} property should be integer type")
        }

        if (typeof record.mark !== 'number' || !(Number.isInteger(record.mark)) || (record.mark < 0)){
            throw new TypeError("Record:{mark} property should be integer type")
        }







}