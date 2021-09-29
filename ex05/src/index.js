class Microsoft {
    constructor (name) {
        this._name = name;
    }
    get name() {
       return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    occupation() {
        return this.name + " is a philanthropist!"
    }
}
henry.occupation();
class Facebook extends Microsoft {
   constructor (name, age) {
       super(name);
       this.age = age;
   }
   studentAge() {
       return this.name + " is" + this.age;
   }
}

console.log(henry.occupation());
module.exports = {
    Microsoft,
    Facebook
}