export class Groups{
    #counter = 1;
    #groups = new Map();
    #arrayPupil = new Array();
    #PupilObject = {}
    add(room){
        if ((typeof room !== 'number') || !(Number.isInteger(room)) || (room < 0)){
            throw new TypeError('Parametr should be only integer AND must be positive')
        }
        const id = String(this.#counter++);
        this.groupObj = {id,room};
        this.#groups.set(id, this.groupObj);
        return id;
        
    }


    addPupil(groupId,pupil){
        if (typeof groupId !== 'string')
        {
            throw new TypeError("Id param should by string type")
        }

        if(groupId === ''){
            throw new Error("Id param shouldn\'t be EMPTY string")
        }
        //need to check if same pupil in parametr 2 times
        //validate pupil
        //rooms check to seperatly

        if (this.#arrayPupil.length === 0)
        {
            this.#arrayPupil.push(pupil);
        }else{
            this.#arrayPupil.push(pupil);
        }
        let room = this.#groups.get(groupId).room;
         let pupils = this.#arrayPupil;
         let id = groupId;
         this.#PupilObject = {id,room,pupils}
        this.#groups.set(id,this.#PupilObject );
        return id;

        }


    read(groupId){
        if (typeof groupId !== 'string')
        {
            throw new TypeError("Id param should by string type")
        }

        if(groupId === ''){
            throw new Error("Id param shouldn\'t be EMPTY string")
        }
        
        const foundGroup = this.#groups.get(groupId);
        const pupils = this.#arrayPupil;
        return foundGroup ? {...foundGroup,pupils} : null; 
    }

    
    readAll(){
        if(arguments.length) throw new Error('argument was passed')
        return [...this.#groups.values()];
    }
    

    removePupil(groupId, pupilId){
        if(!this.#groups.has(groupId)){
            throw new Error('Dont exist this group')
        }
        if (typeof groupId !== 'string')
        {
            throw new TypeError("Id param should by string type")
        }

        if(groupId === ''){
            throw new Error("Id param shouldn\'t be EMPTY string")
        }
        if (typeof pupilId !== 'string')
        {
            throw new TypeError("Id param should by string type")
        }

        if(pupilId === ''){
            throw new Error("Id param shouldn\'t be EMPTY string")
        }

        const sizeArr = this.#groups.get(groupId).pupils.length;
        const array = this.#groups.get(groupId).pupils;
       let index;
       let counter = 0;
        for (let i = 0; i < sizeArr; i++){
            if (array[i].id === pupilId){
                index = i;
                counter++;
                break;
            }
        }
        if (counter === 0){
            throw new Error(`Doesn't exit this pupil with id =  ${pupilId} in the ${groupId} group`)
        }
        array.splice(index,1);
    
    
    }

    update(groupId,obj){
        if(!this.#groups.has(groupId)){
            throw new Error('Dont exist this group')
        }
        if (typeof groupId !== 'string')
        {
            throw new TypeError("Id param should by string type")
        }
        if(groupId === ''){
            throw new Error("Id param shouldn\'t be EMPTY string")
        }
        if (typeof obj !== 'object' || (Array.isArray(obj)))
        {
            throw new Error('Parametr must be Object');
        }
       if (!(obj.hasOwnProperty('room'))){
            throw new Error("Second parametrs property must be 'room:'")
       }
       
       if (typeof obj.room !== 'number' || !(Number.isInteger(obj.room)) || (obj.room < 0)){
        throw new TypeError('{ room: "number"} property must be interger');
       }

       const foundGroup = this.read(groupId);
       delete foundGroup.id;
       this.#groups.set(groupId, {
           ...foundGroup,
           ...obj
       });


    }



    }






