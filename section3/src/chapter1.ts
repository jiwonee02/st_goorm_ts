// Unknown 타입

import { futimesSync } from "fs";

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar; ➡️ 다운캐스팅
    // let str: string = unknownVar; ➡️ 다운캐스팅
    // let bool: boolean = unknownVar; ➡️ 다운캐스팅
}

// Never타입
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc(); // ➡️ 업캐스팅
    let str: string = neverFunc(); // ➡️ 업캐스팅
    let bool: boolean = neverFunc(); // ➡️ 업캐스팅

    // let never1: never = 10;  ➡️ 다운캐스팅
    // let never2: never = "string";  ➡️ 다운캐스팅
    // let never3: never = true;  ➡️ 다운캐스팅
}

// Void 타입
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined;
}

// Any 타입
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // ➡️ 다운캐스팅 가능
    undefinedVar = anyVar; // ➡️ 다운캐스팅 가능
    // neverVar = anyVar; ➡️ 다운캐스팅
}
