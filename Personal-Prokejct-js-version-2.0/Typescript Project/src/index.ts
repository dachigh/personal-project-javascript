import { Subject } from "./subject";
import { LMS } from "./lms";
import { Pupils } from "./pupils";
import { Teachers } from "./teachers";
        //Instances of Subject class
const history1 = new Subject({
title: 'History',
lessons: 24,
description: 'The only source of knowledge is experience'
});


const math = new Subject({
title: 'Math',
lessons: 20,
});

const biology = new Subject({
title: 'Bio',
lessons: 50,
});


const h_id = history1.subject_ID;
const m_id = math.subject_ID;
const b_id = biology.subject_ID;
console.log("History ID = ",h_id)
console.log("Math ID = ",m_id)
console.log("Biology ID = ",b_id)
                




  //Instances of LMS class
  const lms = new LMS();


lms.add(history1); 
lms.add(math);    
lms.add(biology);  //return True or False;,to  verify must be instance of Subject
const test = 1;
const h_ver = lms.verify(history1); //true
const m_ver  = lms.verify(math); //true
const b_ver  = lms.verify(biology); //true
console.log("History Verify = ",h_ver)
console.log("Math Verify = ",m_ver)
console.log("Biology Verify = ",b_ver)

      //Just remove subject from LMS
//lms.remove(math); 

  //List all Data in LMS
const lmsList = lms.readAll();
console.log("LMS readALL = ",lmsList);


 //Creating  Pupils test data

 let pupil1 = {
  name:{
    first: 'Igor',
    last: 'Savage'
  },
  dateOfBirth: '05-17-2004',
  phones:[
    {
      phone: '+995 (32) 511-111-111',
      primary: false
    },
    {
      phone: '+995 (32) 511-111-111',
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
      phone: '+995 (32) 522-222-222',
      primary: true
    },
    {
      phone: '+995 (32) 520-201-943',
      primary: false
    }
  ],
  sex: 'female'
}
let pupil3 = {
  name:{
    first: 'Max',
    last: 'Mad'
  },
  dateOfBirth: '11-14-2003',
  phones:[
    {
      phone: '+995 (32) 533-333-333',
      primary: true
    },
    {
      phone: '+995 (32) 520-123-102',
      primary: false
    }
  ],
  sex: 'male'
}
let pupil4 = {
  name:{
    first: 'Bob',
    last: 'Walker'
  },
  dateOfBirth: '11-14-1999',
  phones:[
    {
      phone: '+995 (32) 599-444-444',
      primary: true
    },
    {
      phone: '+995 (32) 545-454-454',
      primary: false
    }
  ],
  sex: 'male'
}
let pupil5 = {
  name:{
    first: 'Ana',
    last: 'Smith'
  },
  dateOfBirth: '11-14-1998',
  phones:[
    {
      phone: '+995 (32) 555-555-555',
      primary: true
    },
    {
      phone: '+995 (32) 550-500-500',
      primary: false
    }
  ],
  sex: 'female'
}
let pupil6 = {
  name:{
    first: 'Lisa',
    last: 'Jobs'
  },
  dateOfBirth: '11-14-1995',
  phones:[
    {
      phone: '+995 (32) 566-666-666',
      primary: true
    },
    {
      phone: '+995 (32) 560-600-600',
      primary: false
    }
  ],
  sex: 'female'
}
let updatedProfilePupils = {
  name:{
    first: 'Peter',
    last: 'Pen'
  },
  dateOfBirth: '11-14-1992',
  phones:[
    {
      phone: '+995 (32) 511-111-111',
      primary: false
    },
    {
      phone: '+995 (32) 520-123-100',
      primary: true
    }
  ],
  sex: 'male',
}


  //Creating instance of Pupils
const pupils = new Pupils();

      //Add a new pupil
let pupilID1 = pupils.add(pupil1);
let pupilID2 = pupils.add(pupil2);
let pupilID3 = pupils.add(pupil3);
let pupilID4 = pupils.add(pupil4);
let pupilID5 = pupils.add(pupil5);
let pupilID6 = pupils.add(pupil6);

    //Getter to return pupils id
const p_1 = pupilID1.id;
const p_2 = pupilID2.id;
const p_3 = pupilID3.id;
const p_4 = pupilID4.id;
const p_5 = pupilID5.id;
const p_6 = pupilID6.id;

console.log('\nPupil_1 ID = ',p_1);
console.log('Pupil_2 ID = ',p_2);
console.log('Pupil_3 ID = ',p_3);
console.log('Pupil_4 ID = ',p_4);
console.log('Pupil_5 ID = ',p_5);
console.log('Pupil_6 ID = ',p_6);

     
          //Read data by pupil ID,return obj
console.log("Read Pupil_1 Data = ",pupils.read(pupilID1.id));
console.log("Read Pupil_2 Data = ",pupils.read(pupilID2.id));
console.log("Read Pupil_3 Data = ",pupils.read(pupilID3.id));
console.log("Read Pupil_4 Data = ",pupils.read(pupilID4.id));
console.log("Read Pupil_5 Data = ",pupils.read(pupilID5.id));
console.log("Read Pupil_6 Data = ",pupils.read(pupilID6.id));
          
       //Update specific pupil data by id,new pupil obj 
pupils.update(pupilID1.id, updatedProfilePupils);
console.log("updated Pupil_1 Data = ",pupils.read(pupilID1.id));
//Removes Pupils by id true or false
//console.log(pupils.remove(pupilID6.id));




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
    let TeacherObj3 = {
      name: {
        first: "Nona",
        last: "Heard"
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
        first: "NewGil",
        last: "Ginn"
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
    const teacherID2 = teachers.add(TeacherObj2); 
    const teacherID3 = teachers.add(TeacherObj3);
    console.log("\nteacherID1  = ",teacherID1)
    console.log('teacherID2  = ',teacherID2);
    console.log('teacherID3  = ',teacherID3);
    
    
        //Reading Specific Data Of Teachers by ID
//const t_test = teachers.read('5'); //return teacher not found
//console.log(t_test)
const t_one = teachers.read(teacherID1); //return data
const t_two = teachers.read(teacherID2); //return data
const t_three = teachers.read(teacherID3); //return data
console.log('Teacher #1 = ',t_one);
console.log('Teacher #2 =',t_two);
console.log('Teacher #3 =',t_three);
    

//Update Date of Teachers by ID;
  const teacherId = teachers.update(teacherID1, updatedProfileTeacher)
console.log(teachers.read(teacherID1));



        //Return Boolean
console.log(teachers.remove(teacherID1));