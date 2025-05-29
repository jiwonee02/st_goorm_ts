const employee = {
    name: "김덕성",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("일함");
    }
}

const employeeB = new Employee("김구름", 20, "developer");
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
};

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
