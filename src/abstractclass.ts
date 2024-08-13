//In an abstract class you cant directly create an object. 
//You can only create an object when a normal class e
abstract class TakeP {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        //some complex calculation
        return 9
    }
    
}

class Insta extends TakeP{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log('Sepia');
        
    }
}

const hitesh = new Insta("Bokeh", "Guassian Blur", 71)
hitesh.getReelTime()
// const chisom = new TakePhoto("Bokeh", "siloeutte")
