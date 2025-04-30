type Person = {
    name: string;
    age: number;
};

// value => number : toFixed를 적용
// value => string : toUpperCase를 적용
// value => Date : getTime을 적용
// value => Person : name은 age살입니다
function func(value: number | string | Date | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
