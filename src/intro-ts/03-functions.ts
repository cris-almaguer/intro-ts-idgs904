const addition = (a, b) : void => console.log(a + b);

const result = addition('Daniel', ' Valdez');

const additionTwo = (numberOne:number, numberTwo:number) : number => numberOne + numberTwo;

console.log(additionTwo(11, 44));

const multiplication = (numberThree:number, numberFour:number, numberFive:number = 5) : number => 
{
    let result:number = numberThree * numberFive;
    return result;
};

console.log(multiplication(11, 44, 6));

interface Pets 
{
    name:string,
    age:number,
    showAge: () => void
}

const setDataPets = (pet:Pets, x:number) : void => 
{
    pet.age += x;
    console.log(pet);
}

const newPet:Pets = 
{
    name: 'Keko',
    age: 10,
    showAge() 
    {
        console.log(`Pet age ${this.age}`);
    },
}

setDataPets(newPet, 4);

let additionFunction = (numberOne:number, numberTwo:number) : number => numberOne + numberTwo;

console.log(additionFunction(4, 3));

const addition3 = (...values:number[]) : number => 
{
    let additionValues = 0;
    for (let x = 0; x < values.length; x++) 
        additionValues += values[x];
    return additionValues;
}

console.log(addition3(10, 2, 3, 4));
console.log(addition3(1, 2));   




