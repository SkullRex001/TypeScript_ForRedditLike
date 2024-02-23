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