"use strict";
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
//here we choose to extend two things and in the TakePhoto it can 
class Youtube {
    constructor(cameraMode, filter, burstMode, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.shorts = shorts;
    }
    createStory() {
    }
}
