import { Subject,LMS } from "./Modules for school management/LMS.mjs"; 
import { Teachers } from "./Modules for school management/Teachers.mjs";
import {Pupils} from "./Modules for school management/Pupils.mjs";
import { Groups } from "./Modules for school management/Groups.mjs";
import { GradeBooks } from "./Modules for school management/GradeBooks.mjs";


const history = new Subject({
  title: 'History',
  lessons: 24,
  description: 'The only source of knowledge is experience'
});
    
 //Instances of Subject class
const math = new Subject({
  title: 'Math',
  lessons: 20,
});
    
const bio = {
  title: 'Bio',
  lessons: 50,
};
    
    //check ID-s for Subjects instances
const h_id = history.id;
const m_id = math.id;

// console.log(h_id);
// console.log(m_id);

    //Instances of LMS class
const lms = new LMS();

    //Adding instances of subject into LMS;
//return nothing
lms.add(history); 
lms.add(math);    

    //return True or False;,to  verify must be instance of Subject
const test = 1;
const h_ver = lms.verify(history); //true
const m_ver  = lms.verify(math); //true

// console.log(h_ver);
// console.log(m_ver);

//const t_ver = lms.verify(test);//Error  
// console.log(t_ver);

        //Just remove subject from LMS
  //return nothing   
//lms.remove(math); 

    //List all Data in LMS
const lmsList = lms.readAll();
//console.log(lmsList);

      // Teacher's Data: 
let TeacherObj1 = {
  name: {
    first: "Gil",
    last: "Lig"
  },
  dateOfBirth: "05-23-1997",
  emails: [
    {
      email: "arcu.vestibulum.ante@icloud.net",
      primary: true
    },
    {
      email: "sapien.molestie.orci@protonmail.com",
      primary: false
    }      
  ],
  phones: [
    {
      phone: "+995 (32) 573-492-787",
      primary: true
    },
    {
      phone: "+995 (32) 593-254-456",
      primary: false
    }
  ],
  sex: "male",
  subjects: [
    {
      subject: 'History'
    }
  ],
  description: "Better than a thousand days of diligent study is one day with a great teacher",
}

let TeacherObj2 = {
  name: {
    first: "Kelsey",
    last: "Leon"
  },
  dateOfBirth: "12-31-1990",
  emails: [
    {
      email: "ante.iaculis@protonmail.net",
      primary: false
    },
    {
      email: "orci.tincidunt@aol.org",
      primary: true
    }  
  ],
  phones: [
    {
      phone: "+995 (32) 573-123-456",
      primary: true
    },
    {
      phone: "+995 (32) 525-741-987",
      primary: false
    }
  ],
  sex: "female",
  subjects: [
    {
      subject: 'History'
    },
    {
      subject: 'Math'
    }
  ],
}

let updatedProfileTeacher = {
  name: {
    first: "dac",
    last: "gin"
  },
  dateOfBirth: "05-23-2005",
  emails: [
    {
      email: "asd.vestibulum.ante@icloud.net",
      primary: false
    },
    {
      email: "lsax.molestie.orci@protonmail.com",
      primary: true
    }      
  ],
  phones: [
    {
      phone: "+995 (32) 573-492-787",
      primary: true
    },
    {
      phone: "+995 (32) 593-254-456",
      primary: false
    }
  ],
  sex: "male",
  subjects: [
    {
      subject: 'Crypto'
    }
  ],
  description: "Lazy Teacher",
}

      //Creating Instance of Teacher Class
const teachers = new Teachers();

      //Adding some teachers object
const teacherID1 = teachers.add(TeacherObj1); // return id
const teacherID2 = teachers.add(TeacherObj2); //

// console.log(teacherID1);
// console.log(teacherID2);


    //Reading Specific Data Of Teachers by ID
const t_test = teachers.read('5'); //return null
const t_one = teachers.read(teacherID1); //return data
const t_two = teachers.read(teacherID2); //return data

// console.log(t_one);
// console.log(t_two);
// console.log( t_test)


    //Update Date of Teachers by ID;
    // return nothing

const teacherId = teachers.update(teacherID1, updatedProfileTeacher)

    //Remove teacher data by ID
    // return nothing

//teachers.remove(teacherId1)


    //Creating  Pupils test data

let pupil1 = {
  name:{
    first: 'Igor',
    last: 'Savage'
  },
  dateOfBirth: '05-17-2004',
  phones:[
    {
      phone: '+995 (32) 587-852-741',
      primary: false
    },
    {
      phone: '+995 (32) 587-862-742',
      primary: true
    }
  ],
  sex: 'male',
  description: 'sehr gut pupil'

}

let pupil2 = {
  name:{
    first: 'Brooke',
    last: 'Kidd'
  },
  dateOfBirth: '11-14-2001',
  phones:[
    {
      phone: '+995 (32) 547-912-321',
      primary: true
    },
    {
      phone: '+995 (32) 520-201-943',
      primary: false
    }
  ],
  sex: 'female'
}

let updatedProfilePupils = {
  name:{
    first: 'peter',
    last: 'pen'
  },
  dateOfBirth: '11-14-1992',
  phones:[
    {
      phone: '+995 (32) 547-752-012',
      primary: false
    },
    {
      phone: '+995 (32) 520-123-954',
      primary: true
    }
  ],
  sex: 'male'
}


  //Creating instance of Pupils
const pupils = new Pupils();

      //Add a new pupil
let pupilID1 =pupils.add(pupil1);
let pupilID2 =pupils.add(pupil2);


    //Getter to return pupils id
const p_one = pupilID1.id;
const p_two = pupilID2.id;

// console.log(p_one);
// console.log(p_two);


    //Read data by pupil ID,return obj
const p_one_r = pupils.read(pupilID1.id);
const p_two_r = pupils.read(pupilID2.id);

// console.log(p_one_r);
// console.log(p_two_r);


    //Update specific pupil data by id,new pupil obj 
    //return nothing
pupils.update(pupilID2.id, updatedProfilePupils);

  //Removes Pupils by id
//pupils.remove(pupilID2.id)




          //Create Group class instances and Rooms 
const room1 = 236;
const room2 = 500;
const groups = new Groups();

    // Create a new group. 
    //add methods takes integer as a parameter. 
    //returns id of group
const groupId1 = groups.add(room1);
const groupId2 = groups.add(room2);
// console.log(groupId1);
// console.log(groupId2);


    // Add this pupil to this group
groups.addPupil(groupId1, pupilID1);
groups.addPupil(groupId1, pupilID2);
groups.addPupil(groupId2, pupilID1);
 
  //Read Group Data by id 
const g_one_r = groups.read(groupId1);
const g_two_r = groups.read(groupId2);

// console.log(g_one_r);
// console.log(g_two_r);

  //List All data in Group
const groupsList = groups.readAll();

//console.log(groupsList);


      //Remove this pupil from this group
//const g_rem = groups.removePupil(groupId1, pupilID1.id);


      // Update room for group by id,{}
groups.update(groupId1, {
  room: 237
});




    //Creating Instance of GradeBooks
const teacherId1 = teacherID1;
const gradebooks = new GradeBooks(groups, teachers, lms);

      //Add a new gradebook.
const gradebook = gradebooks.add(groupId1);

  //Creating Obj for records
  const record = {
    pupilId: pupilID1.id,
    teacherId: teacherId1,
    subjectId: history.id,
    lesson: 1,
    mark: 9
  };

  const record1 = {
    pupilId: pupilID1.id,
    teacherId: teacherId1,
    subjectId: history.id,
    lesson: 1,
    mark: 9
  };


    //Adding records
gradebooks.addRecord(gradebook, record);
gradebooks.addRecord(gradebook, record1);

  //Read data about specific pupil
const vigacPupil = gradebooks.read(gradebook, pupilID1.id);
//console.log(vigacPupil);

  //List all data inside gradobook
const students = gradebooks.readAll(gradebook); 
//console.log(students);

// Destroy all data inside this gradebook
//gradebooks.clear();