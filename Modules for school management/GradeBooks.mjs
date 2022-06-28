import { ValidateGradebooksinstance, ValidateRecord } from "../Validation/GradeBookVal.mjs";

export class GradeBooks{
    #groups;
    #teacher;
    #lms;
    #pupils ;
    #counter = 0;
    #gradeBooks = new Map();

    constructor(groups,teacher,lms){
      ValidateGradebooksinstance(groups,teacher,lms);
        this.#groups = groups;
        this.#teacher = teacher;
        this.#lms = lms;
    }


    add(groupID){
      if (typeof groupID !== 'string')
      {
        throw new TypeError('Typeof id should be string')
      }
      if (groupID == '')
      {
        throw new TypeError('Id param shouldn\'t be EMPTY string')
      }

        let tempObject = {}
        this.#gradeBooks.set(groupID,tempObject);
        return groupID;
    }


    addRecord(gradebookId, record){
        if (typeof gradebookId !== 'string')
        {
            throw new TypeError("Id param should by string type")
        }

        if(gradebookId === ''){
            throw new Error("Id param shouldn\'t be EMPTY string")
        }
        if(!this.#gradeBooks.has(gradebookId)){
            throw new Error('Dont exist this gradeBook')
        }
        ValidateRecord(record);
        let pupilname;
        this.#groups.data().get(gradebookId)
          .pupils.forEach((item) => {
            if (item.id === record.pupilId) {
              pupilname = item.name.first + ' ' + item.name.last;
            }
          });
          this.#gradeBooks.get(gradebookId)[record.pupilId] = {name: pupilname,
            records: [
              {
                teacher:
                  this.#teacher.data().get(record.teacherId).name
                    .first +
                  ' ' +
                  this.#teacher.data().get(record.teacherId).name
                    .last,
                subject: this.#lms.data().get(record.subjectId).title,
                lesson: record.lesson,
                mark: record.mark,
              },
            ],
          };          
    }

    clear(){
        if(arguments.length) throw new Error('argument was passed')
        this.#gradeBooks.clear();
    }

    read(gradebookId, pupilId) {
      if (typeof gradebookId !== 'string')
      {
          throw new TypeError("Id param should by string type")
      }

      if(gradebookId === ''){
          throw new Error("Id param shouldn\'t be EMPTY string")
      }
      if(!this.#gradeBooks.has(gradebookId)){
          throw new Error('Dont exist this gradeBook')
      }
      if (typeof pupilId !== 'string')
      {
        throw new TypeError('Typeof id should be string')
      }
      if (pupilId == '')
      {
        throw new TypeError('Id param shouldn\'t be EMPTY string')
      }


    return this.#gradeBooks.get(gradebookId)[pupilId];
  }


    readAll(gradebookId){
      if (typeof gradebookId !== 'string')
      {
          throw new TypeError("Id param should by string type")
      }

      if(gradebookId === ''){
          throw new Error("Id param shouldn\'t be EMPTY string")
      }
      if(!this.#gradeBooks.has(gradebookId)){
          throw new Error('Dont exist this gradeBook')
      }
        return [this.#gradeBooks.get(gradebookId)]
    }

}