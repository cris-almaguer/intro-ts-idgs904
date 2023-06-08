interface Student 
{
    id?: number,
    name: string,
    email: string,
    age: number
};

const students:Student = 
{
    // id: 20001745,
    name: 'Alexis',
    age: 21,
    email: 'alex@gmail.com'
};

let typedVector:Array<number> = [23, 4, 22];
typedVector.push(21);
typedVector.forEach(item => console.log(item));
