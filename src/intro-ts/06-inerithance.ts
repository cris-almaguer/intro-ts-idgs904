class PersonFive 
{
    protected namePersonFive: string;
    protected agePersonFive: number;

    constructor(namePerson:string, agePerson:number)
    {
        this.namePersonFive = namePerson;
        this.agePersonFive = agePerson
    }

    print = () => console.log(`Nombre: ${this.namePersonFive} y Edad: ${this.agePersonFive}`);
}

class Employee extends PersonFive
{
    private salary:number;
    constructor(employeeName:string, employeeAge:number, salary:number) 
    {
        super(employeeName, employeeAge);
        this.salary = salary;
    }

    print = () => 
    {
        super.print()
        console.log(`Sueldo ${this.salary}`);
    } 
}