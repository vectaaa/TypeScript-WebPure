interface TakePhoto{
    cameraMode: string,
    filter: string,
    burstMode: number,
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
    ){}
}

//here we choose to extend two things and in the TakePhoto it can 
class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public shorts: string,
    ){}

    createStory(): void {
        
    }
}
