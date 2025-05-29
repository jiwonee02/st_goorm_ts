const employee = {
    name: "김덕성",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    name;
    age;
    position;
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    work() {
        console.log("일함");
    }
}
const employeeB = new Employee("김구름", 20, "developer");
console.log(employee);
export {};
