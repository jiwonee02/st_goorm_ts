// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입의 호환성
type Animal = { name: string; color: string };

type Dog = { name: string; color: string; breed: string };

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog; // ➡️ 업캐스팅
// dog = animal;  ➡️ 다운캐스팅

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    skill: "typescript",
};

book = programmingBook; // ➡️ 업캐스팅
// programmingBook = book; ➡️ 다운캐스팅

let book2: Book = {
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    // skill: "typescript", ➡️ 초과 프로퍼티 검사 발동
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    // skill: "typescript",
});
func(programmingBook);
