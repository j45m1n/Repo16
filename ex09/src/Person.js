class Person {
    constructor (name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        var personInfo = "Name: ${name}, email: ${email}, age: ${age}";
        return personInfo;
        
    }
}

module.exports = Person;