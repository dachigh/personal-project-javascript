import { Subject,LMS } from "./Modules for school management/LMS.mjs"; 



const history = new Subject({
  title: 'History',
  lessons: 24,
  description: 'The only source of knowledge is experience'
});
    
const math = new Subject({
  title: 'Math',
  lessons: 20,
  description: 'The only source of knowledge is experience'
});
    
const bio = {
  title: 'Bio',
  lessons: 50,
  description: 'The only source of knowledge is experience'
};
    
history.id;

math.id;  

const lms = new LMS();

lms.add(history); 
lms.add(math);    

lms.verify(math);  

lms.remove(history);   

lms.readAll();



