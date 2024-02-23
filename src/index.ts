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


//////////////////////////////////////////////////////

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