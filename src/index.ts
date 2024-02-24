// union type
let a: string | number;
a = 345
a = "AVS"

let a2 = <number>23;


///////////////////////////////////////////////

// function

const func = (n: number, m: number): number => {
    return n * m;
}

///////////////////////////////////////////

//type alaysis

type myType = number | string;

let b: myType = "AVS"
b = 45;


///////////////////////////////////////


type myFun = (n: number, m: number) => number;

const myFunc: myFun = (n, m) => {
    return n * m;
}



///////////////////////////////////////////

//array

const arr: string[] = [];
//or
const arr2: Array<string> = []
const arr3: Array<string | number> = [23, "AVS"]

//touple or fixed size array

const arr4: [number, number, number] = [1, 2, 3]


/////////////////////////////////////////////////////////////////////////////////

type Obj = {
    height: number;
    weight: number;
    gender?: boolean;
    //? means optional
}

const obj1: Obj = {
    height: 11,
    weight: 97
}

type FuncType = (n: number, m: number) => void


interface Obj2 {
    height: number;
    weight: number;
    gender: boolean;
    func: FuncType;
}

// the difference between type and interface is that you can extent interface just like class , but in type you cannot

const obj2: Obj2 = {

    height: 11,
    weight: 97,
    gender: false,
    func: (n, m) => {
        console.log(n * m)
    }

}

interface Obj4 extends Obj2 {
    name: string
}

const obj3: Obj4 = {
    name: "AVS",
    height: 11,
    weight: 97,
    gender: false,
    func: (n, m) => {
        console.log(n * m)
    }

}


interface Person {
    name : string,
    email : string
}

const myobj : Person = {
    name : "AVS",
    email : "AVS@gmail.com"
}

// Allowed

const getName = (): string =>{
    return myobj["name"]
}

//Allowed

const getEmail = () : string =>{
    return myobj["email"]
}

//NOT ALLOWED

//This is because key here can be anything , but in our interface there are only two keys

// const getDetils = (key:string): string=>{
//     return myobj[key]
// }

//ALLOWED

type KEY = 'name'| 'email'

const getDetils = (key:KEY): string=>{
    return myobj[key]
}


// Defining general interface for object in which we don't know the number of keys

interface PERSON {
    [key : string] : string
}

const MYOBJ : PERSON = {
    name : "AVS",
    email : "AVS@gmail.com"
}

// ALLOWED

// This is because of general nature of interface

const GETDETAILS = (key:string): string=>{
    return MYOBJ[key]
}

//but there is a problem , here we can pass anything in key and got MYOBJ anything other than name and email will return undefined

//Best Solution

interface PersonInter {
    name : string,
    email : string
}

const MYOBJ2 : PersonInter = {
    name : "AVS",
    email : "AVS@gmail.com"
}

const getDetils2 = (key : keyof PersonInter): string=>{
    return MYOBJ[key]
}

getDetils2("email")


// if we don't know the interface but only have object


const getDetils3 = (key : keyof typeof MYOBJ2): string=>{
    return MYOBJ[key]
}









//////////////////////////////////////////////////////////////////////////////////

type FunType = (n: number, m: number, l?: number) => number;

const func1: FunType = (a, b, c) => {
    if (typeof c === "undefined") return a * b
    return a * b * c
}

func(1, 2)

//default value

type FunType2 = (n: number, m: number, l?: number) => number;

const func2: FunType2 = (a, b, c = 20) => {
    return a * b * c
}
//if value of c will not be provided , it will be 20 by default

func(1, 2)


//Rest Opreatior
//ie. If we dont know how many paramerter will be in array

const func3 = (...m: number[]) => {
    return m

}

func3(23, 42, 42, 24, 92)


//or

type FuncType3 = (...m: number[]) => number[]

const func4: FuncType3 = (...m) => {
    return m
}

func4(23, 42, 42, 24, 92)


// Function with object
type ObjType = {
    name: string,
    stock: number,
    price: number,
    photo: string,
    readonly id?: string
    //once assigned , we cannot modify id
}

type GetDataType = (product: ObjType) => void;

const getData: GetDataType = (product) => {
    // product.id = "aditya" this is not allowed
    console.log(product)

}

getData({ name: "AVS", stock: 5, price: 100, photo: "yoyo" })

type themeMode = "light" | "dark"

// const Theme : themeMode = "ad"  not allowed

const Theme: themeMode = "dark" //allowed


//Never Type

const errorHandler = (): never => {
    throw new Error();
    //return new Error ----> this will be of Error type
}


////////////////////////////////////////////////////////////////////////////////////

//Classes

// In JS there are no access modifiers ,but in TS there are access modifiers

// Public :- class prop or method that can be accessed anywhere

//Private :- class prop or method that can only be accesses in the class

//Protected : - class prop that or method that can only be accessed in class or in extended class

class Player {
    public readonly id: string
    constructor(private height: number, public weight: number, protected power: number) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100)

    }

    getMyHeight = () => this.height;
    //height can be accessed here
}

class Player2 extends Player {
    special: boolean
    constructor(height: number, weight: number, power: number, special: boolean) {
        super(height, weight, power)
        this.special = special
    }

    // this class can access weight and power prop from supe class

    // getMyHeight2: () => this.height //NOT ALLOWED

    getMyWeight = () => this.weight;

    getMyPower = () => this.power;


}


const player1 = new Player(7.7, 90, 100)

// player1.height and player1.power is NOT ALLOWED


// Setter and Getter Method

class Human {
    private population: string
    constructor(public height: number, public weight: number) {
        //this.height = height 
        //this.weight = weight 
        //these things are automatically done
        this.population = "4 billion"
    }

    get getPopulation(): string {
        return this.population
    }

    set changeHeight(val: number) {
        this.height = val
    }
}

const Human1 = new Human(12, 100)

console.log("height " + Human1.getPopulation)
//see, it is getPopulation not getPopulation()

console.log(Human1.height)

Human1.changeHeight = 200;

console.log(Human1.height)

interface ProductType {
    name: string,
    price: number,
    stock: string,
    offer?: boolean
}

interface GiveId {
    getId : () => string
}
//note we cannot declare private and protected here , if we want to do this , we will have to add prop in class with access modifiers directly

class Product implements ProductType , GiveId{
    name: string;
    price: number;;
    stock: string;
    private id: string = String(Math.random())

    constructor(name: string, price: number, stock: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id;

    }

    getId = () => this.id

}

/////////////////////////////////////////////////////////////////////////////////////

//Type Assertion

//When anything can be multiple type then typeScript doesn't allow many features

// Telling typescript that we know beter then it does and follow our instructions


const addOrConcat = (a:number , b:number , c:'add'| 'conact' ): number|string =>{
    if(c='add') return a+b;
    return '' + a + b
}

// let myVal: string = addOrConcat(2 , 2 , 'conact') NOT ALLOWED as addOrConcat can return number or string but we are assigning it to a number

//Here comes Type Assertion

let myVal: string = addOrConcat(2 , 2 , 'conact') as string

//THIS IS WRONG AS WE ARE RETURNING STRING , BUT TS HAS NO PROBLEM WITH IT BECAUSE OF TYPE ASSERTION

let myVal1: number = addOrConcat(2 , 2 , 'conact') as number


//It is generelly use while accessing dom element

const MyButton = document.getElementById('btn')
MyButton?.onclick //? is there because MyButton can be null

//TO FIX THIS

const MyButton1 = document.getElementById('btn')! //we can use notnull operator
MyButton1.onclick 


const MyButton2 = document.getElementById('btn') as HTMLButtonElement //we can use type assertion
MyButton2.onclick


const MyButton3 = <HTMLButtonElement>document.getElementById('btn') //we can use type assertion
MyButton3.onclick


const image = document.getElementById('myimg');
// image.scr NOT ALLOWED

const image1 = document.getElementById('myimg') as HTMLImageElement

image1.src // ALLOWED


/////////////////////////////////////////////////////////////////////////////////////////////

//Type Utility

//Partial<Type>

type User = {
    name : string,
    email : string
}

type User2 = Partial<User>
//hover on user to see the type
//both name and email will be optional in this field


/////////////////////////////////////////////////////////////////////////////////////


// Required<Type> --Opposite of partial


type User3 = {
    name? : string,
    email : string
}

type User4 = Required<User3>
//hover on User4 to see the type
//both name and email will be required



/////////////////////////////////////////////////////////////////////////////////////

//Readonly<Type> 

type User5 = {
    name : string,
    email : string
}

//in the object of User5 type we can change value after creating , but if we want to convert both name and email keys to readonly type then Readonly

const OBJC : Readonly<User5> = {
    name : "AVS",
    email: "AVS"
}

// OBJC.name = "ADI" not allowed as :-

// type User5 = {
//   readonly name : string,
//   readonly  email : string
// }

//something like this has happened



///////////////////////////////////////////////////////////////////////////////////////////


// Record <Keys , Type>

type User6 = {
    name : string,
    email : string,
    address : string
}

//This can be made using record

type User7 = Record<"name"|"email"|"address" , string>

//User6 amd User7 type are same

//Example

type User8 = {
    john : {
        age : number
    },
    levi : {
        age : number
    },
    elon : {
        age : number
    },
    jack : {
        age : number
    }
}

//complex types like this can be created easily using Record

type userAge = {
    age : number
}

type userName = "john"|"levi"|"elon"|"jack"

type UserInfo2 = Record<userName , userAge>
//all the userName are of type userAge

/////////////////////////////////////////////////////////////////////////////////////

//Pick<Type , Keys>


interface OrderInfo {
    readonly id: string,
    user : string,
    city : string,
    state : string,
    country : string,
    status : string
}

//if we want to pick some from OrderInfo type

type ShippingInfo = Pick<OrderInfo , "city"|"state"| "country">

//similary

// Omit <Type , Keys>

type ShippingInfo2 = Omit<OrderInfo , 'user'|'status'| 'id'>

//note : ShippingInfo and Shipping Info2 are same

/////////////////////////////////////////////////////////////////////////////////////

// Exclude <Type , ExcludeUnion>

type MyUnion = string|number|boolean;

type Random = Exclude<MyUnion , boolean>

// exlude given type from our type

/////////////////////////////////////////////////////////////////////////////////////

//Extract<Type , Union>

type MyUnion2 = string|number|boolean;

type Random2 = Extract<MyUnion2 , boolean>
//extract given data type from provided type

/////////////////////////////////////////////////////////////////////////////////////

// NonNullable<Type>

type MyUnion3 = string|number|boolean|null|undefined;
type Random3 = NonNullable<MyUnion3>

//remove null and undefined

////////////////////////////////////////////////////////////////////////////////////

//Parameters<Type>

const Random4 = (a: number , b:number):void =>{
    console.log(a+b)

}

type Random5 = Parameters<typeof Random4>

//hover on Random5 to see it's type
//it gives type of array of parameters


////////////////////////////////////////////////////////////////////////////////////

//ConstructorParameters<Type>
class SampleClass {
    constructor(public s : string , public t : string){

    }
}
type Random6 = ConstructorParameters<typeof SampleClass>
//give array of type of parameter of a class


/////////////////////////////////////////////////////////////////////////////////////
//ReturnType<type>
//give return type of function
const Random7 = (a: number , b:number):string =>{
    console.log(a+b)
    return String(a+b)

}

type Random7Type = ReturnType<typeof Random7>






