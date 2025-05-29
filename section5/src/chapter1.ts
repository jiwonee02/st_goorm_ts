// 인터페이스

interface Person {
    readonly name: string;
    age?: number;
    // sayHi: () => void;
    sayHi(): void;
    sayHi(a: number, b: number): void; // ➡️ 호출 시그니처
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
    name: "김덕성",
    age: 24,
    sayHi: function () {
        console.log("Hi");
    },
};

person.sayHi();
person.sayHi(1, 2);
