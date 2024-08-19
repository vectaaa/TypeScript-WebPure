function detection(val: number | string) {
    if(typeof val === "string" ){
        return val.toLowerCase();
    }
    return val + 3
}

function printAll(strs: string | string [] | null ){
    if(strs) {
        if(typeof strs === "object") {
            for (const s of strs){
                console.log(s);
            }

        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

//The In-operator
type Bird = {
    swim: () => void
};

type Fish = {
    fly: () => void
};

function move(animals: Bird | Fish ){
    if("swim" in animals){
        return animals.swim();
    }
    return animals.fly();
}

//The IN-operator example 2
type Birds = {
    swim: () => void
};

type Fishes = {
    fly: () => void
};

type Humans = {
    swim?: () => void;
    fly?: () => void;
}

function moves(animals: Fishes | Birds | Humans){
    if("swim" in animals){

    }
}

//instanceOf example 
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//Discriminated Union and Exhuastive checking
interface Circle {
    kind: "circle",
    radius: number,
}

interface Square {
    kind: "square",
    side: number,
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
}

type Shapes = Circle | Square 

function getTrueShape(shape: Shapes){
    if(shape.kind === "circle" ){
            return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}