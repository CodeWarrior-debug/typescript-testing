
// https://www.youtube.com/watch?v=JUORwadOU7s
// https://www.classcentral.com/classroom/freecodecamp-learn-typescript-full-course-for-beginners-97400/62da31ce69249


interface Todo{
    id:number;
    title:string;
}

const todo: Todo = {
    id:2,
    title: 'lift four things',
}


console.log(`my todo has id less than ${todo.id+1} and is titled ${todo.title}`)


// useful executable is npx tsc --init