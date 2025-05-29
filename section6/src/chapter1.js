// 클래스

let studentA = {
    name: "김덕성",
    grade: "A+",
    age: 20,
    study() {
        console.log("열심히 공부함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부함");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name}입니다!`);
    }
}

let studentB = new Student("김구름", "A+", 20);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}

const studentDeveloper = new StudentDeveloper("한지원", "A+", 24, "Typescript");
console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();
