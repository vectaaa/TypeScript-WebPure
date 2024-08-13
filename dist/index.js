"use strict";
//Classes in typescript
class User {
    constructor(email, name, age, lang = 'English') {
        this.email = email;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.email = email;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello i a ${this.age} years old`;
    }
}
const vecta = new User("vec@ymail.com", "vickyboy", 34);
// vecta.city = "Imo state"
//Classes with more cleaner code and syntatic sugar we can see her that the 'this.' isn't part of the code 
class Student {
    constructor(email, password, phoneNumber) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this._courseCount = 2;
        this.lang = "English";
    }
    get getEmail() {
        return `my email is ${this.email}`;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course content should be more than 2");
        }
        this._courseCount = courseNum;
    }
}
//Here we acess the protected type.
class SubStudent extends Student {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
    }
}
const vickyboy = new Student('v@gmail.com', '121213ed', 9022332244);
console.log(vickyboy, 'res');
//Getters and Setters.
