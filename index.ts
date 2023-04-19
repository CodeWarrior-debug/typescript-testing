
// https://www.youtube.com/watch?v=JUORwadOU7s
// https://www.classcentral.com/classroom/freecodecamp-learn-typescript-full-course-for-beginners-97400/62da31ce69249

// **********INTERFACES
interface Todo{
    id:number;
    title:string;
    // **********optional values with ?
    // pipe for multi variable types, 
    weight?: number | string = string
}

// TODO reinforce what type void does
// TODO reinforce what TS generics and functions are 
// TODO reinforce enums and statuses, remember enum assignments use equals sign not :


//quotable - any is the worst type in Typescript

//never - basically throws errors, needs throw and not return

//converting datatypes later down the road = two step unknown option

// working with DOM  -ex. HTMLInputElement - tons of different HTML elements, even event types



const todo: Todo = {
    id:2,
    title: 'lift four things',
    weight: 80,
}



const {id, title, weight} = todo;


console.log(`my todo has id less than ${id+1} and is titled ${title} and is so very old at ${weight}`)


// **********passing arguments with type requirements
const getFullName=(firstName:string, lastName:string)=>{
 return   firstName + " " + lastName
}

console.log(getFullName("james","freakingJordan"))

// useful executable is npx tsc --init