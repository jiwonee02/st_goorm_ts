// enum 타입

enum Role {
    ADMIN,
    USER = 10,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "한지원",
    role: Role.ADMIN, // 관리자
    language: Language.korean,
};

const user2 = {
    name: "김덕성",
    role: Role.USER, // 일반 유저
    language: Language.english,
};

const user3 = {
    name: "김구름",
    role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
