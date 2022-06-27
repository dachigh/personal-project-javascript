export function validatePupils(pupil){
    //Object Property Validation:

    if (typeof pupil !== 'object' || (Array.isArray(pupil)))
    {
        throw new Error('Parametr must be Object');
    }
    const sizeObj = Object.getOwnPropertyNames(pupil).length; 

    if (sizeObj < 4 || sizeObj > 5){
        throw new Error('Object must have min 4 and max 5 main properties');
    };

    if (sizeObj === 4){
        const arrMustProperties = new Array('name', 'dateOfBirth', 'phones', 'sex');
        const arrCheckProperties = new Array();
        for (let i = 0; i < sizeObj; i++)
        {
            arrCheckProperties.push(Object.getOwnPropertyNames(pupil)[i]);

        }
        
        if(JSON.stringify(arrMustProperties) !== JSON.stringify(arrCheckProperties))
        {
            throw new Error("Object Properties are not same as needed. Example of Required Properties: 'name', 'dateOfBirth', 'phones', 'sex'");
        };
    }

    if (sizeObj === 5){
        const arrMustProperties = new Array('name', 'dateOfBirth', 'phones', 'sex', 'description');
        const arrCheckProperties = new Array();
        
        for (let i = 0; i < sizeObj; i++)
        {
            arrCheckProperties.push(Object.getOwnPropertyNames(pupil)[i]);
        }
        
        if(JSON.stringify(arrMustProperties) !== JSON.stringify(arrCheckProperties))
        {
            throw new Error("Object Properties are not same as needed. Example of Required Properties: 'name', 'dateOfBirth', 'phones', 'sex', 'description' ");
        };
    }


//Name Validation:
    if (Object.getOwnPropertyNames(pupil.name).length !== 2)
    {
        throw new Error("Property name must be object AND have only 2 property");
    }
    
    if (Object.getOwnPropertyNames(pupil.name)[0] !== 'first')
    {
        throw new Error('Object name\'s 1-st property key must be "first"');
    };

    if (typeof pupil.name.first !== 'string' || pupil.name.first.length === 0){
        throw new TypeError('"first" value must be string type AND must not be empty');
    }

    if (Object.getOwnPropertyNames(pupil.name)[1] !== 'last')
    {
        throw new Error('Object name\'s 1-st property key must be "last" ');
    };
    
    if (typeof pupil.name.last !== 'string' || pupil.name.last.length === 0){
        throw new TypeError('"last" value must be string type AND must not be empty');
    }

//Date Validation:
if (pupil.dateOfBirth.length === 0 || typeof pupil.dateOfBirth !== 'string'){
    throw new TypeError("DateOfBirth must be string type and shouldn\'t be empty")
}

const regexExp = /^^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
if(!pupil.dateOfBirth.match(regexExp)){
    throw new TypeError("Date format is mm/dd/yyyy");
}

//Phone Validation:
if (!Array.isArray(pupil.phones)){
    throw new TypeError("phones property value must be an Array type");
}   
const regexPhone = /(\+995)[-. ]?\(32\)[-. ]?(5)(\d{2}[-. ]?\d{3})[-. ]?\d{3}/;
let countPrimaryPhone = 0;
for (let i = 0; i < pupil.phones.length; i++){
    if (typeof pupil.phones[i] !== 'object'){
        throw new TypeError("In phones: in Array all value should be an object type [{},{},...] ");
    }
    if ((Object.getOwnPropertyNames(pupil.phones[i])).length !== 2)
    {
        throw new Error("In phones: must have only 2 property")
    }

    if(!pupil.phones[i].hasOwnProperty('phone'))
    {
        throw new Error("In phones: 1-st property key should be phone:")
    }

    if (typeof pupil.phones[i].phone !== 'string'){
        throw new TypeError("In phones: phone: property value should be string type")
    }

    if (pupil.phones[i].phone.length === 0){
        throw new Error("In phones: phone: property value shouldn\'t EMPTY.")
    }

    if (!pupil.phones[i].phone.match(regexPhone))
    {
        throw new TypeError("In phone: phone: property value should be format for Georgian phone number,example: '+995 (32) 573-123-456'");   
    }

    if(!pupil.phones[i].hasOwnProperty('primary'))
    {
        throw new Error("In phones: 2-nd property key should be primary:")
    }
    
    if(typeof pupil.phones[i].primary !== 'boolean'){
        throw new TypeError("In phones: primary: property value should be boolean type");
    }

    if (pupil.phones[i].primary === true)
    {
        countPrimaryPhone++;
    }
}
    if(countPrimaryPhone !== 1){
        throw new Error("Only 1 phone can be primary AND is required to be at least 1 primary")
    }



//Sex Validation:
if (typeof pupil.sex !== 'string')
{
    throw new TypeError("Sex Prototype should be string type")
}
if (pupil.sex.length === 0)
{
    throw new TypeError("Sex Prototype shouldn\'t be EMPTY string")
}

if (pupil.sex.toLowerCase() !== 'male' && pupil.sex.toLowerCase() !== 'female')
{
    throw new TypeError("Sex Prototype only get 'male' OR 'female' as value")
}


// //Description Validation:


if (pupil.hasOwnProperty('description')){
    
    if (typeof pupil.description !== 'string')
    {
        throw new TypeError("Description Prototype should be string type")
    }
    if (pupil.description.length === 0)
    {
        throw new TypeError("Description Prototype shouldn\'t be EMPTY string")
    }
}




















}