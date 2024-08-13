//Classes in typescript

class User {
   
    constructor(
        public email: string, 
        public readonly name: string, 
        private age: number, 
        protected lang: string = 'English'
    ){
        this.email = email;
        this.name = name;
        this.age = age
        this.lang = lang;
        
    }

    public getAge() {
        return `Hello i a ${this.age} years old`
    }
}


const vecta = new User("vec@ymail.com", "vickyboy",34)
// vecta.city = "Imo state"



//Classes with more cleaner code and syntatic sugar we can see her that the 'this.' isn't part of the code 
class Student {
    protected _courseCount = 2;
    readonly lang: string = "English"
    constructor(public email: string, public password: string, public phoneNumber: number){

    }
    get getEmail(): string{
        return `my email is ${this.email}`
    }

    set courseCount(courseNum: number){
        if(courseNum <= 1){
            throw new Error("Course content should be more than 2")
        }
        this._courseCount = courseNum
    }
}

//Here we acess the protected type.
class SubStudent extends Student {
    isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 5
    }
}

const vickyboy = new Student('v@gmail.com', '121213ed', 9022332244)
console.log(vickyboy, 'res');
//Getters and Setters.
