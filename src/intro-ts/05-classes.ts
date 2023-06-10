class Person 
{
    namePerson: string = '2';
    agePerson: number = 2;

    constructor(namePerson:string, agePerson:number)
    {
        this.namePerson = namePerson;
        this.agePerson = agePerson
    }

    print = () => console.log(`Nombre: ${this.namePerson} y Edad: ${this.agePerson}`);
}

let person:Person;
person = new Person('Nicole', 23);
person.print();

// Modificadores de acceso
class Dice 
{
    private value:number = 0;
    
    public drop = () => this.generate();

    public generate = () => this.value = Math.floor(Math.random() * 6) + 1;

    public print = () => console.log(`Valor: ${this.value}`);
}

let dice = new Dice;
dice.drop()
dice.print();

// Clase 2
class PersonTwo 
{
    constructor(public namePersonTwo:string, public agePersonTwo:number) {}
    print = () => console.log(`Nombre: ${this.namePersonTwo} y Edad: ${this.agePersonTwo}`);
}