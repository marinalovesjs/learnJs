let login = prompt("Введите логин:");
let password = prompt("Введите пароль:");

if (login === "admin" && password === "1234") {
    alert("Добро пожаловать, повелитель кода!");
} else if (login === "admin") {
    alert("Пароль не тот… но логин — зачётный 😉");
} else {
    alert("Хм… кто вы, незнакомец?");
}

console.log(`Логин: ${login}, Пароль: ${password}`);
