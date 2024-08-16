//This are generics they things that help make your
//Components reusable.


const score: Array<number> = []
const names: Array<string> = []



function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

identityThree(3)

function identityFour<T>(val: T): T{
    return val
}
interface Bottle{
    brand: string,
    type: number,
}

identityFour<Bottle>({
    brand: "",
    type: 0
})

//
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 5
    return products[myIndex]
}

//Generic classes 

interface Database{
    connection: string,
    username: string,
    password: string,
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U){
    return{
        valOne,
        valTwo,
    }
}

// anotherFunc(3, {})

class Sellable<T>{

    public cart: T[]= []

    addToCart(product: T){
        this.cart.push(product)
    }
}