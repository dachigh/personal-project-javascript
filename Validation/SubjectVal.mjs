export function validateSubject(subject){
    if(Object.getOwnPropertyNames(subject)[0] !== 'title'){
        throw new Error('Object\'s 1-st property name must be title and It\'s required string property.')
    }

    if(Object.getOwnPropertyNames(subject)[1] !== 'lessons'){
        throw new Error('Object\'s 2-nd property name must be lessons and It\'s required number property.')
    }

    if (Object.getOwnPropertyNames(subject)[2] !== undefined){
        if(Object.getOwnPropertyNames(subject)[2] !== 'description')
        {throw new Error('Object\'s 3-rd property name must be description')}
    }
    
    if(subject.title && typeof subject.title !== 'string'){
        throw new TypeError('title is not a string')
    }

    if(subject.lessons !== undefined && typeof subject.lessons !== 'number'){
        throw new TypeError('lessons is not a number')
    }
    
    if(subject.description && typeof subject.description !== 'string'){
        throw new TypeError('description is not a string')
    }
}