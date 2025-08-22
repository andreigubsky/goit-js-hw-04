const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        this.username = newName;
    }, //приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
    updatePlayTime(hours) {
        this.playTime += hours;
    }, //приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
    getInfo() {
        return `${this.username} has ${this.playTime} active houres!`
    }, //має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
};







console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"