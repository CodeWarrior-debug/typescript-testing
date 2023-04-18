
// https://www.youtube.com/watch?v=JUORwadOU7s
// https://www.classcentral.com/classroom/freecodecamp-learn-typescript-full-course-for-beginners-97400/62da31ce69249

// **********INTERFACES
interface Todo{
    id:number;
    title:string;
    // **********optional values with ?
    age?: number,
}

const todo: Todo = {
    id:2,
    title: 'lift four things',
    age: 75
}

const {id, title} = todo;


console.log(`my todo has id less than ${id+1} and is titled ${title} and is so very old at ${}`)


// **********passing arguments with type requirements
const getFullName=(firstName:string, lastName:string)=>{
 return   firstName + " " + lastName
}

console.log(getFullName("james","freakingJordan"))

// useful executable is npx tsc --init