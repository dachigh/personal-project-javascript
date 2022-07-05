import { Groups } from "./group";
import { LMS } from "./lms";
import { Teachers, Teacher } from "./teachers";

interface recordFace {
  pupilId: string;
  teacherId: string;
  subjectId: string;
  lesson: number;
  mark: number;
}

export class Gradebooks {
  static counter = 0;
  private groups: Groups;
  private teachers: Teachers;
  private lms: LMS;

  constructor(group: Groups, teacher: Teachers, lms: LMS) {
    this.groups = group;
    this.teachers = teacher;
    this.lms = lms;
  }

  private gradebooksMap = new Map();

  add(groupId: string): string {
    const id = String(++Gradebooks.counter);
    this.gradebooksMap.set(id, { groupId, records: [] });
    return id;
  }

  clear(): void {
    this.gradebooksMap.clear();
  }

  addRecord(gradebookId: string, record: object): void {
    if (!this.gradebooksMap.has(gradebookId)) {
      throw new Error(`Gradebook# ${gradebookId} doesn\'t exist`);
    }
    this.gradebooksMap.get(gradebookId).records.push(record);
  }

  read(gradebookId: string, pupilId: string): object {
    if (!this.gradebooksMap.has(gradebookId)) {
      throw new Error(`Gradebook# ${gradebookId} doesn\'t exist`);
    }
    const gradebook = this.gradebooksMap.get(gradebookId);
    const group: any = this.groups.read(gradebook.groupId);
    const pupil = group.pupils.find(
      (pupil: { id: string }) => pupil.id === pupilId
    );
    return {
      name: pupil.name.first + " " + pupil.name.last,
      records: gradebook.records
        .filter((record: { pupilId: string }) => record.pupilId === pupil.id)
        .map(
          (record: {
            teacherId: string;
            subjectId: string;
            lesson: number;
            mark: number;
          }) => {
            const teacher: any = this.teachers.read(record.teacherId);
            return {
              teacher: teacher.name.first + " " + teacher.name.last,
                    // CANT RESOLVE  THIS PROBLEM
              subject: this.lms.readAll().find(subj =>  subj.id === record.subjectId).title,
              lesson: record.lesson,
              mark: record.mark,
            };
          }
        ),
    };
  }

  readAll(gradebookId: string): object[] {
    if (!this.gradebooksMap.has(gradebookId)) {
      throw new TypeError(`Gradebook# ${gradebookId} doesn\'t exist`);
    }
    const gradebook = this.gradebooksMap.get(gradebookId);
    const group: any = this.groups.read(gradebook.groupId);
    const arrPupilsInfo = [];
    for (const pupil of group.pupils) {
      arrPupilsInfo.push(this.read(gradebookId, pupil.id));
    }
    return arrPupilsInfo;
  }
}
