    var randomLoc = Math.floor(Math.random() * 5);
    var location1 = randomLoc;
    var location2 = location1 + 1;
    var location3 = location2 + 1;

    var guess;
    var hits = 0;
    var guesses = 0;

    var isSunk = false;

    while (isSunk == false) {
        guess = prompt("Готовься, Целься, Огонь! (введите номер 0-6):");
        if (guess < 0 || guess > 6) {
        alert ("Введите корректный номер ячейки");
        } else {
            guesses = guesses + 1;
        }
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("ПОПАДАНИЕ!");
            hits = hits + 1;
        }
        else {
            alert("ПРОМАХ!");
        }
        if (hits == 3) {
            isSunk = true;
            alert ("Мой корабль пошёл ко дну!");
        }
    }

    var stats = " Ты выстрелил " + guesses + " раза, " +
        "твоя меткость составила " + (3/guesses) * 100 + "%";
        alert(stats)

