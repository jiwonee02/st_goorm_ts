type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "한지원";
person.age = 24;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

// 단언 규칙

let num1 = 10 as never; // a가 b의 슈퍼타입인 경우
let num2 = 10 as unknown; // a가 b의 서브타입인 경우

let num3 = 10 as unknown as string; // 다중 단언

// const 단언
let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// cat.name = ""; ➡️ 수정할 수 없는 객체가 됨

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "한지원",
};

const len: number = post.author!.length;
