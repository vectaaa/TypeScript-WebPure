//Classes in typescript

class User {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const vecta = new User("vec@ymail.com", "vickyboy")
vecta.city = "Imo state"

//Getters and Setters.
