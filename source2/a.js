_name = Symbol("name")

class Hello {
    constructor(name, age) {
        this[_name] = name
        this.age = age
    }

    getName() {
        return this[_name]
    }
}

const obj = new Hello("rello", 23)
console.log(obj)
console.log(obj.name())