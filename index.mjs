import { Subject,LMS } from "./Modules for school management/LMS.mjs"; 
import { Teachers } from "./Modules for school management/Teachers.mjs";
import {Pupils} from "./Modules for school management/Pupils.mjs";

const history = new Subject({
  title: 'History',
  lessons: 24,
  description: 'The only source of knowledge is experience'
});
    
const math = new Subject({
  title: 'Math',
  lessons: 20,
});
    
const bio = {
  title: 'Bio',
  lessons: 50,
};
    
history.id;

math.id;  

const lms = new LMS();

lms.add(history); 
lms.add(math);    

lms.verify(math);  

lms.remove(history);   

lms.readAll();

// Teacher's schema
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


const teachers = new Teachers();

const teacherId1 = teachers.add(TeacherObj1); //id
const teacherId2 = teachers.add(TeacherObj2); //id

teachers.read('5'); //null
teachers.read(teacherId1);
teachers.read(teacherId2);

const teacherId = teachers.update(teacherId1, updatedProfileTeacher)

teachers.remove(teacherId1)



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



const pupils = new Pupils();

// Create a new pupil
const pupilID1 = pupils.add(pupil1);
const pupilID2 = pupils.add(pupil2);


pupilID1.id;
pupilID2.id;


pupils.read(pupilID1.id);

pupils.update(pupilID2.id, updatedProfilePupils)

pupils.read(pupilID2.id);


pupils.remove(pupilID2.id)


