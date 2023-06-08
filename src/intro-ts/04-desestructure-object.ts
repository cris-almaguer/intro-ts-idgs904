interface NewStudent 
{
    idStudent: number,
    nameStudent:string,
    ageStudent:number,
    emailStudent:string,
    groupStudent: Group
}

interface Group 
{
    group: string,
    year: number
}

const newStudent:NewStudent = 
{
    idStudent: 20001468,
    nameStudent: "Nicole Cucco",
    ageStudent: 22,
    emailStudent: "nnicole@sonymusic.com",
    groupStudent:
    {
        group: 'IDGS',
        year: 2023
    }
}

console.info("-> Impresión de objetos por método estandar");

console.log(`La matricula es: ${ newStudent.idStudent }`);
console.log(`El nombre es: ${ newStudent.nameStudent }`);
console.log(`El grupo es: ${ newStudent.groupStudent.group }`);
console.log(`El año es: ${ newStudent.groupStudent.year }`);

console.info("-> Desestructuración de objetos");

const { idStudent, nameStudent, ageStudent, emailStudent, groupStudent } = newStudent; 
const { group, year } = groupStudent;
console.log(`La matricula es: ${ idStudent }`);
console.log(`El nombre es: ${ nameStudent }`);
console.log(`El grupo es: ${ group }`);
console.log(`El año es: ${ year }`);

console.info("-> Impresión arreglos estandar");

const groups:string[] = ["IDGS", "IEVM", "IRD"];

console.log(`Grupo 1: ${ groups[0] }`);
console.log(`Grupo 2: ${ groups[1] }`);
console.log(`Grupo 3: ${ groups[2] }`);

console.info("-> Desestructuración de arreglos");

const [a, b, c] = groups;
console.log(`Grupo 1: ${ a }`);
console.log(`Grupo 2: ${ b }`);
console.log(`Grupo 3: ${ c }`);



