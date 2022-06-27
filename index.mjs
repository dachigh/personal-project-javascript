import { Subject,LMS } from "./Modules for school management/LMS.mjs"; 
import { Teachers } from "./Modules for school management/Teachers.mjs";

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

let updatedProfile = {
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

const teacherId1 = teachers.add(TeacherObj1);
const teacherId2 = teachers.add(TeacherObj2);

console.log(teacherId1,teacherId2);

console.log(teachers.read(teacherId1));
console.log(teachers.read(teacherId2));

let updatedProfile1 = [];
// will update Teacher. This method should use the same validation as a add method
const teacherId = teachers.update(teacherId1, updatedProfile1)
console.log(teachers.read(teacherId1));

// will remove teacher
teachers.remove(teacherId1)

console.log(teachers.read(teacherId1));
console.log(teachers.read(teacherId2));
