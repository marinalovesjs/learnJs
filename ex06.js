let age = Number(prompt("Сколько тебе лет?"));

if (age < 0) {
    alert("Ты из будущего? 🤖");
} else if (age < 7) {
    alert("Тебе пора играть, а не код писать!");
} else if (age < 18) {
    alert("Ты ещё не достиг совершеннолетия.");
} else if (age < 60) {
    alert("Добро пожаловать, взрослый человек!");
} else if (age <= 120) {
    alert("Уважение возрасту 🙏");
} else {
    alert("Ты бессмертна? 👑");
}

console.log("Возраст пользователя: " + age);
