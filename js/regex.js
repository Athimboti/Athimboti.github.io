class Dev {
    constructor(name) {
        this.name = name
        this.type = "Dev"
    }
}

class Tester {
    constructor(name) {
        this.name = name
        this.type = "Tester"
    }
}

class EmployeeFactory {
    constructor() {
        this.create = (name, type) => {
            switch (type) {
                case 1:
                    return new Dev(name)
                    break
                case 2:
                    return new Tester(name)
                    break
            }
        }
    }
}

function say()
{
    console.log("Hi, I am " + this.name + " and I am a" + this.type )
}

const employeTeam = new EmployeeFactory() 
const employees = []

employees.push(EmployeeFactory.create("Athi", 1))

employees.forEach( emp => {
    say.call(emp)
})

// if (
//     /^https\:\athimboti\.github.io\/$/.exec(document.location)) {
//         console.log("am here")
//     }