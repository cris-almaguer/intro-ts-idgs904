class StackInt 
{
    private vec:number[] = [];

    insert = (x:number) => this.vec.push(x);
    extract = () => this.vec.length > 0 ? this.vec.pop() : null;  
}

class StackString
{
    private vec:string[] = [];

    insert = (x:string) => this.vec.push(x);
    extract = () => this.vec.length > 0 ? this.vec.pop() : null;  
}

let stackOne = new StackInt();
stackOne.insert(23);
stackOne.insert(28);
stackOne.insert(2);
console.log(stackOne.extract());

let stackTwo = new StackString();
stackTwo.insert('23');
stackTwo.insert('04');
stackTwo.insert('22');
console.log(stackTwo.extract());

// CLases genéricas
class GenericStack<T>
{
    private vec:T[] = [];

    insert = (x:T) => this.vec.push(x);
    extract = () => this.vec.length > 0 ? this.vec.pop() : null;  
}

let stackThree = new GenericStack<number>();
stackThree.insert(23);
stackThree.insert(4);
stackThree.insert(22);
console.log(stackThree.extract());

let stackFour = new GenericStack<string>();
stackFour.insert('23');
stackFour.insert('04');
stackFour.insert('22');
console.log(stackFour.extract());