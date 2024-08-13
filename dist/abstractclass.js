"use strict";
//In an abstract class you cant directly create an object. 
//You can only create an object when a normal class e
class TakeP {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 9;
    }
}
class Insta extends TakeP {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const hitesh = new Insta("Bokeh", "Guassian Blur", 71);
hitesh.getReelTime();
// const chisom = new TakePhoto("Bokeh", "siloeutte")
