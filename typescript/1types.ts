const isFetching: boolean = true
const isLoading : boolean = false

const int: number = 42
const float:number = 4.2;
const num: number = 3e10;

const message:string = 'Hello Typescript';

const numberArray:number[] = [1,2,3,4,5,6];
const numberArray2: Array<number> = [1,2,3,12];

const words: string[] = ['Hello','Typescript'];

const contact: [string,number] = ['vladilenLoh',12345];

let variable:any = 24;

variable = [];


function sayMyName(name:string): void {
    console.log(name);
}

sayMyName('Хайзенберг');

function throwError(message:string): never{
            throw new Error(message)
}

type Login = string;

const login: Login = 'admin';

type ID = string | number;

const id1:ID = 1234;
const id2:ID = '1234';

type SomeType = string | null | undefined