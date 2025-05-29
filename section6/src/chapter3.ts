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

const employee = new Employee("김덕성", 20, "developer");
employee.name = "김구름";
employee.age = 30;
employee.position = "designer";
