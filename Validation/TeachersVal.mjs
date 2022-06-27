export function validateTeachers(teacher){
    const sizeObj = Object.getOwnPropertyNames(teacher).length; 
//Object Property Validation;
        if (typeof teacher !== 'object' || (Array.isArray(teacher)))
        {
            throw new Error('Parametr must be Object');
        }

        if (sizeObj < 6 || sizeObj > 7){
            throw new Error('Object must have min 6 and max 7 properties');
        };

        if (sizeObj === 6){
            const arrMustProperties = new Array('name', 'dateOfBirth', 'emails', 'phones', 'sex', 'subjects');
            const arrCheckProperties = new Array();
            for (let i = 0; i < sizeObj; i++)
            {
                arrCheckProperties.push(Object.getOwnPropertyNames(teacher)[i]);
            }
            
            if(JSON.stringify(arrMustProperties) !== JSON.stringify(arrCheckProperties))
            {
                throw new Error("Object Properties are not same as needed. Example of Required Properties: 'name', 'dateOfBirth', 'emails', 'phones', 'sex', 'subjects'");
            };
        }

        if (sizeObj === 7){
            const arrMustProperties = new Array('name', 'dateOfBirth', 'emails', 'phones', 'sex', 'subjects','description');
            const arrCheckProperties = new Array();
            
            for (let i = 0; i < sizeObj; i++)
            {
                arrCheckProperties.push(Object.getOwnPropertyNames(teacher)[i]);
            }
            
            if(JSON.stringify(arrMustProperties) !== JSON.stringify(arrCheckProperties))
            {
                throw new Error("Object Properties are not same as needed. Example of Required Properties: 'name', 'dateOfBirth', 'emails', 'phones', 'sex', 'subjects', 'description' ");
            };
          }

//Name Validation:
        if (Object.getOwnPropertyNames(teacher.name).length !== 2)
        {
            throw new Error("Property name must be object AND have only 2 property");
        }
        
        if (Object.getOwnPropertyNames(teacher.name)[0] !== 'first')
        {
            throw new Error('Object name\'s 1-st property key must be "first"');
        };

        if (typeof teacher.name.first !== 'string' || teacher.name.first.length === 0){
            throw new TypeError('"first" value must be string type AND must not be empty');
        }
    
        if (Object.getOwnPropertyNames(teacher.name)[1] !== 'last')
        {
            throw new Error('Object name\'s 1-st property key must be "last" ');
        };
        
        if (typeof teacher.name.last !== 'string' || teacher.name.last.length === 0){
            throw new TypeError('"last" value must be string type AND must not be empty');
        }
        
//Date Validation:
        if (teacher.dateOfBirth.length === 0 || typeof teacher.dateOfBirth !== 'string'){
            throw new TypeError("DateOfBirth must be string type and shouldn\'t be empty")
        }

        const regexExp = /^^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
        if(!teacher.dateOfBirth.match(regexExp)){
            throw new TypeError("Date format is mm/dd/yyyy");
        }

//Email Validation:
        if (!Array.isArray(teacher.emails)){
            throw new TypeError("emails property value must be an Array type");
        }   
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let countPrimaryEmail = 0;
        
        for (let i = 0; i < teacher.emails.length; i++){

            if ((Object.getOwnPropertyNames(teacher.emails[i])).length !== 2)
            {
                throw new Error("In emails: must have only 2 property")
            }

            if (typeof teacher.emails[i] !== 'object'){
                throw new TypeError("In emails: in Array all value should be an object type [{},{},...]");
            }

            if(!teacher.emails[i].hasOwnProperty('email'))
            {
                throw new Error("In emails: 1-st property key should be email:")
            }

            if (typeof teacher.emails[i].email !== 'string'){
                throw new TypeError("In emails: email: property value should be string type")
            }

            if (teacher.emails[i].email.length === 0){
                throw new Error("In emails: email: property value shouldn\'t EMPTY.")
            }

            if (!teacher.emails[i].email.match(regexEmail))
            {
                throw new TypeError("In emails: email: property value should be format for EMAILS");   
            }

            if(!teacher.emails[i].hasOwnProperty('primary'))
            {
                throw new Error("In emails: 2-nd property key should be primary:")
            }

            if(typeof teacher.emails[i].primary !== 'boolean'){
                throw new TypeError("In emails: primary: property value should be boolean type");
            }

            if (teacher.emails[i].primary === true)
            {
                countPrimaryEmail++;
            }
        }
            if(countPrimaryEmail !== 1){
                throw new Error("Only 1 email can be primary AND is required to be at least 1 primary")
            }

//Phone Validation:
if (!Array.isArray(teacher.phones)){
    throw new TypeError("phones property value must be an Array type");
}   
const regexPhone = /(\+995)[-. ]?\(32\)[-. ]?(5)(\d{2}[-. ]?\d{3})[-. ]?\d{3}/;
let countPrimaryPhone = 0;
for (let i = 0; i < teacher.phones.length; i++){
    if (typeof teacher.phones[i] !== 'object'){
        throw new TypeError("In phones: in Array all value should be an object type [{},{},...] ");
    }
    if ((Object.getOwnPropertyNames(teacher.phones[i])).length !== 2)
    {
        throw new Error("In phones: must have only 2 property")
    }

    if(!teacher.phones[i].hasOwnProperty('phone'))
    {
        throw new Error("In phones: 1-st property key should be phone:")
    }

    if (typeof teacher.phones[i].phone !== 'string'){
        throw new TypeError("In phones: phone: property value should be string type")
    }

    if (teacher.phones[i].phone.length === 0){
        throw new Error("In phones: phone: property value shouldn\'t EMPTY.")
    }

    if (!teacher.phones[i].phone.match(regexPhone))
    {
        throw new TypeError("In phone: phone: property value should be format for Georgian phone number,example: '+995 (32) 573-123-456'");   
    }

    if(!teacher.phones[i].hasOwnProperty('primary'))
    {
        throw new Error("In phones: 2-nd property key should be primary:")
    }
    
    if(typeof teacher.phones[i].primary !== 'boolean'){
        throw new TypeError("In phones: primary: property value should be boolean type");
    }

    if (teacher.phones[i].primary === true)
    {
        countPrimaryPhone++;
    }
}
    if(countPrimaryPhone !== 1){
        throw new Error("Only 1 phone can be primary AND is required to be at least 1 primary")
    }


//Sex Validation:
if (typeof teacher.sex !== 'string')
{
    throw new TypeError("Sex Prototype should be string type")
}
if (teacher.sex.length === 0)
{
    throw new TypeError("Sex Prototype shouldn\'t be EMPTY string")
}

if (teacher.sex.toLowerCase() !== 'male' && teacher.sex.toLowerCase() !== 'female')
{
    throw new TypeError("Sex Prototype only get 'male' OR 'female' as value")
}

//Subject Validation:

if (!Array.isArray(teacher.subjects)){
    throw new TypeError("subject property value must be an Array type");
}   

for (let i = 0; i < teacher.subjects.length; i++){
    if (typeof teacher.subjects[i] !== 'object'){
        throw new TypeError("In subjects: in Array all value should be an object type [{},{},...] ");
    } 

    if ((Object.getOwnPropertyNames(teacher.subjects[i])).length !== 1)
    {
        throw new Error("In subjects: must have only 1 property")
    }

    if(!teacher.subjects[i].hasOwnProperty('subject'))
    {
        throw new Error("In subjects:property key should be only 'subject'")
    }

    if(typeof teacher.subjects[i].subject !== 'string')
    {
        throw new TypeError("In subjects: subject: property value should be string type")   
    }

    if(teacher.subjects[i].subject.length === 0)
    {
        throw new TypeError("In subjects: subject: property value shouldn\'t be EMPTY string")   
    }
}
}